import { FC, useEffect, useState } from 'react';

import ISceneView from 'esri/views/SceneView';
import IVoxelLayer from 'esri/layers/VoxelLayer';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowVoxel, selectVariable } from '../../store/Map/selectors';
import { setVoxelVariables } from '../../store/Map/reducer';
import { VoxelVariable } from '../../types/types';
import { VOXEL_LAYER_TITLE, VARIABLE_MAP, INITIAL_SELECTED_VARIABLE } from '../../config';

type Props = {
  view?: ISceneView;
};

const VoxelLayer: FC<Props> = ({ view }: Props) => {
  const visible = useSelector(selectShowVoxel);
  const selectedVariable = useSelector(selectVariable);
  const [layer, setLayer] = useState<IVoxelLayer>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (layer && selectedVariable) {
      layer.currentVariableId = selectedVariable.id;
    }
  }, [layer, selectedVariable]);

  useEffect(() => {
    if (layer) {
      layer.visible = visible;
    }
  }, [layer, visible]);

  // initialization
  useEffect(() => {
    if (view) {
      console.log('I ran this');
      const layer = view.map.layers.find((layer) => layer.title === VOXEL_LAYER_TITLE) as IVoxelLayer;
      setLayer(layer);
      layer.when(() => {
        const voxelVariables: VoxelVariable[] = [];
        for (let key in VARIABLE_MAP) {
          if (VARIABLE_MAP.hasOwnProperty(key)) {
            const variable = layer.variables.find((v) => v.name === key);
            const { id, name, unit, description } = variable;
            voxelVariables.push({
              description,
              name: VARIABLE_MAP[name],
              id,
              unit,
              continuous: variable.renderingFormat.continuity === 'continuous',
              selected: key === INITIAL_SELECTED_VARIABLE
            });
          }
        }
        dispatch(setVoxelVariables(voxelVariables));
      });
    }
  }, [view]);

  return null;
};

export default VoxelLayer;
