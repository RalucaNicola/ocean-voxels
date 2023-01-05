import { createSlice } from '@reduxjs/toolkit';

export type MapState = {
  showVoxel: boolean;
};

const initialMapState: MapState = {
  showVoxel: true
};

const slice = createSlice({
  name: 'Map',
  initialState: initialMapState,
  reducers: {
    voxelToggled: (state) => {
      state.showVoxel = !state.showVoxel;
    }
  }
});

export const { voxelToggled } = slice.actions;

export const { reducer } = slice;
