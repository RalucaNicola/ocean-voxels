import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LegendInfo, VoxelVariable } from '../../types/types';

export type MapState = {
  showVoxel: boolean;
  voxelVariables: VoxelVariable[];
  legendInfos: LegendInfo[];
};

const initialMapState: MapState = {
  showVoxel: true,
  voxelVariables: [],
  legendInfos: []
};

const slice = createSlice({
  name: 'Map',
  initialState: initialMapState,
  reducers: {
    voxelToggled: (state) => {
      state.showVoxel = !state.showVoxel;
    },
    setVoxelVariables: (state, action: PayloadAction<VoxelVariable[]>) => {
      state.voxelVariables = action.payload;
    },
    setSelectedVariable: (state, action: PayloadAction<number>) => {
      state.voxelVariables = state.voxelVariables.map((variable) => {
        if (variable.id === action.payload) {
          variable.selected = true;
        } else {
          variable.selected = false;
        }
        return variable;
      });
    },
    setLegendInfos: (state, action: PayloadAction<LegendInfo[]>) => {
      state.legendInfos = action.payload;
    }
  }
});

export const { voxelToggled, setVoxelVariables, setSelectedVariable, setLegendInfos } = slice.actions;

export const { reducer } = slice;
