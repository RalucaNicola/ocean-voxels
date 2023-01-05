import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../storeConfiguration';

export const selectShowVoxel = createSelector(
  (state: RootState) => state.Map.showVoxel,
  (showVoxel) => showVoxel
);
