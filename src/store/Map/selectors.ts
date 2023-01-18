import { createSelector } from '@reduxjs/toolkit';
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

export const selectRenderMode = (state: RootState) => {
  if (state.Map.sectionEnabled || state.Map.isosurfaceEnabled) {
    return 'surfaces';
  } else {
    return 'volume';
  }
};

export const selectOffsetFromGround = (state: RootState) => state.Map.offsetFromGround;
