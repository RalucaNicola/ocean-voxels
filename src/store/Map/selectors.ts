import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../storeConfiguration';

export const selectShowVoxel = createSelector(
  (state: RootState) => state.Map.showVoxel,
  (showVoxel) => showVoxel
);

export const selectVoxelVariables = createSelector(
  (state: RootState) => state.Map.voxelVariables,
  (voxelVariables) => voxelVariables
);

export const selectVariable = createSelector(
  (state: RootState) => state.Map.voxelVariables,
  (voxelVariables) => voxelVariables.find((variable) => variable.selected)
);
