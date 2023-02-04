import { FC, useEffect, useRef, useState } from 'react';

import ISceneView from 'esri/views/SceneView';
import IVoxelLayer from 'esri/layers/VoxelLayer';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVariable,
  selectLegendInfo,
  selectSectionEnabled,
  selectSectionParameters,
  selectRenderMode,
  selectOffsetFromGround,
  selectCurrentIsosurfaceValue,
  selectIsosurfaceEnabled,
  selectHoverEnabled
} from '../../store/Map/selectors';
import { setVoxelVariables, setLegendInfos, setTooltipPosition, setTooltipData } from '../../store/Map/reducer';
import { LegendInfo, TooltipData, VoxelUniqueValue, VoxelVariable } from '../../types/types';
import {
  VOXEL_LAYER_TITLE,
  VARIABLE_MAP,
  INITIAL_SELECTED_VARIABLE,
  EMU_UNITS,
  EMU_INFO_DATA,
  INITIAL_VERTICAL_OFFSET
} from '../../config';
import Collection from '@arcgis/core/core/Collection';
import { Point } from '@arcgis/core/geometry';

const formatDecimals = (value: number): number => {
  return Math.round((value * 100) / 100);
};

type Props = {
  view?: ISceneView;
};

const VoxelLayer: FC<Props> = ({ view }: Props) => {
  const selectedVariable = useSelector(selectVariable);
  const offsetFromGround = useSelector(selectOffsetFromGround);
  const currentIsosurfaceValue = useSelector(selectCurrentIsosurfaceValue);
  const isosurfaceEnabled = useSelector(selectIsosurfaceEnabled);
  const legendInfo = useSelector(selectLegendInfo);
  const sectionEnabled = useSelector(selectSectionEnabled);
  const sectionParameters = useSelector(selectSectionParameters);
  const renderMode = useSelector(selectRenderMode);
  const hoverEnabled = useSelector(selectHoverEnabled);
  const mouseMoveHandler = useRef(null);
  const variables = useRef([]);
  const [layer, setLayer] = useState<IVoxelLayer>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (layer && offsetFromGround) {
      layer.getVolumeStyle(null).verticalOffset = offsetFromGround * 1000;
    }
  }, [offsetFromGround]);

  useEffect(() => {
    if (layer && selectedVariable) {
      layer.currentVariableId = selectedVariable.id;
    }
  }, [layer, selectedVariable]);

  useEffect(() => {
    if (layer && currentIsosurfaceValue && selectedVariable) {
      const color = layer.getColorForContinuousDataValue(selectedVariable.id, currentIsosurfaceValue, false);
      const isosurfaces: Collection<__esri.VoxelIsosurface> = new Collection([
        {
          value: currentIsosurfaceValue,
          colorLocked: true,
          color
        }
      ]);
      layer.getVariableStyle(selectedVariable.id).isosurfaces = isosurfaces;
    }
  }, [layer, currentIsosurfaceValue, selectedVariable]);

  useEffect(() => {
    if (layer) {
      layer.enableDynamicSections = sectionEnabled;
    }
  }, [layer, sectionEnabled]);

  useEffect(() => {
    if (layer) {
      layer.enableIsosurfaces = isosurfaceEnabled;
    }
  }, [layer, isosurfaceEnabled]);

  useEffect(() => {
    if (layer && sectionParameters) {
      const { orientation, tilt, x, y, z } = sectionParameters;
      const [vx, vy, vz] = layer.getVolume(null).computeVoxelSpaceLocation(new Point({ x, y, z }));
      layer.getVolumeStyle(null).dynamicSections = new Collection([{ orientation, tilt, point: [vx, vy, vz] }]);
    }
  }, [layer, sectionParameters]);

  useEffect(() => {
    if (layer) {
      layer.renderMode = renderMode;
    }
  }, [layer, renderMode]);

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
      if (layer) {
        layer.when(() => {
          setLayer(layer);
          layer.getVolumeStyle(null).verticalOffset = INITIAL_VERTICAL_OFFSET * 1000;
          const voxelVariables: VoxelVariable[] = [];
          const legendInfos = [];
          for (let key in VARIABLE_MAP) {
            if (VARIABLE_MAP.hasOwnProperty(key)) {
              const variable = layer.variables.find((v) => v.name === key);
              const { id, name, description } = variable;
              let unit = '';
              if (EMU_UNITS.hasOwnProperty(VARIABLE_MAP[key])) {
                unit = EMU_UNITS[VARIABLE_MAP[key]];
              }
              const continuous = variable.renderingFormat.continuity === 'continuous';
              const style = layer.getVariableStyle(id);
              const variableInfo: VoxelVariable = {
                description,
                name: VARIABLE_MAP[name],
                id,
                unit,
                continuous,
                selected: key === INITIAL_SELECTED_VARIABLE
              };
              variables.current.push(variableInfo);
              if (continuous) {
                const range = style.transferFunction.stretchRange;
                variableInfo.isosurfaceValue = formatDecimals((range[0] + range[1]) / 2);
                variableInfo.range = [formatDecimals(range[0]), formatDecimals(range[1])];
              }
              voxelVariables.push(variableInfo);
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
                  if (uv.value >= 0 && uv.value <= 37) {
                    legendInfo.uniqueValues.push({
                      label: uv.label,
                      value: uv.value,
                      color: { r, g, b, a },
                      enabled: uv.enabled
                    });
                  }
                });
              }
              legendInfos.push(legendInfo);
            }
          }
          dispatch(setVoxelVariables(voxelVariables));
          dispatch(setLegendInfos(legendInfos));
        });
      }
    }
  }, [view]);

  useEffect(() => {
    let mouseLeaveHandler: IHandle = null;
    if (view && layer) {
      if (hoverEnabled) {
        mouseLeaveHandler = view.on('pointer-leave', (evt) => {
          dispatch(setTooltipPosition(null));
        });
        mouseMoveHandler.current = view.on('pointer-move', (evt: __esri.ViewPointerMoveEvent) => {
          view.hitTest(evt, { include: [layer] }).then((result: __esri.SceneViewHitTestResult) => {
            if (result.results.length > 0) {
              const attributes = (result.results[0] as __esri.SceneViewGraphicHit).graphic.attributes;
              dispatch(setTooltipPosition(result.screenPoint));
              const variable = variables.current.find(
                (variable) => variable.description === attributes['Voxel.ServiceVariableLabel']
              );
              let variableValue = attributes['Voxel.ServiceValue'].split(' ')[0];
              let color = null;
              if (variable.description === 'cluster37_id') {
                const emuInfo = EMU_INFO_DATA.find((info) => info.id === Number(variableValue));
                const value = `EMU ${variableValue}: ${emuInfo.common}`;
                variableValue = value;
                color = emuInfo.fill;
              } else {
                color = layer.getColorForContinuousDataValue(variable.id, Number(variableValue), false).toHex();
              }
              const data: TooltipData = {
                depth: attributes['Voxel.ServiceDepth'],
                value: variableValue,
                variableLabel: variable.name,
                unit: variable.unit,
                color: color
              };
              dispatch(setTooltipData(data));
            } else {
              dispatch(setTooltipPosition(null));
            }
          });
        });
      } else {
        if (mouseMoveHandler.current) {
          mouseMoveHandler.current.remove();
          mouseMoveHandler.current = null;
          dispatch(setTooltipPosition(null));
        }
      }
    }
    return () => {
      if (mouseMoveHandler.current) {
        mouseMoveHandler.current.remove();
        mouseMoveHandler.current = null;
        dispatch(setTooltipPosition(null));
      }
      if (mouseLeaveHandler) {
        mouseLeaveHandler.remove();
        mouseLeaveHandler = null;
      }
    };
  }, [view, layer, hoverEnabled]);

  return null;
};

export default VoxelLayer;
