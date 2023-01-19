import { createSelector } from '@reduxjs/toolkit';
import { VoxelVariable } from '../../types/types';
import { RootState } from '../storeConfiguration';

export const selectVoxelVariables = (state: RootState) => state.Map.voxelVariables;

export const selectVariable = createSelector(
  (state: RootState) => state.Map.voxelVariables,
  (voxelVariables) => voxelVariables.find((variable) => variable.selected)
);

export const selectLegendInfos = (state: RootState) => state.Map.legendInfos;

export const selectLegendInfo = createSelector(
  selectVariable,
  selectLegendInfos,
  (selectVariable, selectLegendInfos) =>
    selectLegendInfos.filter((legendInfo) => {
      return legendInfo.id === selectVariable.id;
    })[0]
);

export const selectSliceEnabled = (state: RootState) => state.Map.sliceEnabled;
export const selectSlicePlaneOrientation = (state: RootState) => state.Map.slicePlaneOrientation;

export const selectSectionEnabled = (state: RootState) => state.Map.sectionEnabled;
export const selectSectionParameters = (state: RootState) => state.Map.sectionParameters;

export const selectOffsetFromGround = (state: RootState) => state.Map.offsetFromGround;
export const selectCurrentIsosurfaceValue = createSelector(selectVariable, (selectVariable: VoxelVariable) => {
  if (selectVariable && selectVariable.continuous) {
    return selectVariable.isosurfaceValue;
  } else {
    return null;
  }
});
export const selectIsosurfaceEnabled = (state: RootState) => state.Map.isosurfaceEnabled;

export const selectRenderMode = createSelector(
  selectVariable,
  selectSectionEnabled,
  selectIsosurfaceEnabled,
  (selectVariable, selectSectionEnabled, selectIsosurfaceEnabled) => {
    if (selectSectionEnabled) {
      return 'surfaces';
    } else {
      if (selectVariable && selectVariable.continuous && selectIsosurfaceEnabled) {
        return 'surfaces';
      }
    }
    return 'volume';
  }
);

export const selectHoverEnabled = (state: RootState) => state.Map.hoverEnabled;

export const selectTooltipPosition = (state: RootState) => state.Map.tooltipPosition;
export const selectTooltipData = (state: RootState) => state.Map.tooltipData;
