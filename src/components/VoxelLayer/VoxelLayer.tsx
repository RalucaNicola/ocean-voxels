import { FC, useEffect, useState } from 'react';

import ISceneView from 'esri/views/SceneView';
import IVoxelLayer from 'esri/layers/VoxelLayer';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowVoxel, selectVariable } from '../../store/Map/selectors';
import { setVoxelVariables } from '../../store/Map/reducer';
import { VoxelVariable } from '../../types/types';
import { VOXEL_LAYER_TITLE, VARIABLES } from '../../config';

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
        layer.variables.forEach((variable) => {
          if (VARIABLES.includes(variable.name)) {
            const { id, name, unit, description } = variable;
            voxelVariables.push({
              description,
              name,
              id,
              unit,
              continuous: variable.renderingFormat.continuity === 'continuous',
              selected: variable.name === VARIABLES[0]
            });
          }
        });
        dispatch(setVoxelVariables(voxelVariables));
      });
    }
  }, [view]);

  return null;
};

export default VoxelLayer;
