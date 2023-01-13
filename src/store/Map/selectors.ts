import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../storeConfiguration';

export const selectShowVoxel = createSelector(
  (state: RootState) => state.Map.showVoxel,
  (showVoxel) => showVoxel
);

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
