import { FC, useEffect, useState } from 'react';

import ISceneView from 'esri/views/SceneView';
import IVoxelLayer from 'esri/layers/VoxelLayer';
import { useSelector, useDispatch } from 'react-redux';
import { selectVariable, selectLegendInfo } from '../../store/Map/selectors';
import { setVoxelVariables, setLegendInfos } from '../../store/Map/reducer';
import { LegendInfo, VoxelUniqueValue, VoxelVariable } from '../../types/types';
import { VOXEL_LAYER_TITLE, VARIABLE_MAP, INITIAL_SELECTED_VARIABLE } from '../../config';
import Collection from '@arcgis/core/core/Collection';

type Props = {
  view?: ISceneView;
};

const VoxelLayer: FC<Props> = ({ view }: Props) => {
  const selectedVariable = useSelector(selectVariable);
  const legendInfo = useSelector(selectLegendInfo);
  const [layer, setLayer] = useState<IVoxelLayer>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (layer && selectedVariable) {
      layer.currentVariableId = selectedVariable.id;
    }
  }, [layer, selectedVariable]);

  useEffect(() => {
    if (layer && legendInfo && !legendInfo.continuous) {
      layer.getVariableStyle(legendInfo.id).uniqueValues = new Collection(
        legendInfo.uniqueValues.map((uv) => {
          return {
            color: uv.color,
            value: uv.value,
            enabled: uv.enabled,
            label: uv.label
          };
        })
      );
    }
  }, [layer, legendInfo]);

  // on initialization we create the array of voxel variables
  // and the information for the legend
  useEffect(() => {
    if (view) {
      const layer = view.map.layers.find((layer) => layer.title === VOXEL_LAYER_TITLE) as IVoxelLayer;
      layer.when(() => {
        setLayer(layer);
        const voxelVariables: VoxelVariable[] = [];
        const legendInfos = [];
        for (let key in VARIABLE_MAP) {
          if (VARIABLE_MAP.hasOwnProperty(key)) {
            const variable = layer.variables.find((v) => v.name === key);
            const { id, name, unit, description } = variable;
            const continuous = variable.renderingFormat.continuity === 'continuous';
            voxelVariables.push({
              description,
              name: VARIABLE_MAP[name],
              id,
              unit,
              continuous,
              selected: key === INITIAL_SELECTED_VARIABLE
            });
            const style = layer.getVariableStyle(id);
            const legendInfo: LegendInfo = {
              id,
              continuous
            };
            if (continuous && style.transferFunction) {
              legendInfo.range = style.transferFunction.stretchRange;
              legendInfo.colorStops = [];
              style.transferFunction.colorStops.forEach((colorStop) => {
                const { color, position } = colorStop;
                const { r, g, b, a } = color;
                legendInfo.colorStops.push({
                  color: { r, g, b, a },
                  position
                });
              });
            }
            if (!continuous && style.uniqueValues && style.uniqueValues.length > 0) {
              legendInfo.uniqueValues = [];
              style.uniqueValues.forEach((uv: VoxelUniqueValue) => {
                const { r, g, b, a } = uv.color;
                legendInfo.uniqueValues.push({
                  label: uv.label,
                  value: uv.value,
                  color: { r, g, b, a },
                  enabled: uv.enabled
                });
              });
            }
            legendInfos.push(legendInfo);
          }
        }
        dispatch(setVoxelVariables(voxelVariables));
        dispatch(setLegendInfos(legendInfos));
      });
    }
  }, [view]);

  return null;
};

export default VoxelLayer;
