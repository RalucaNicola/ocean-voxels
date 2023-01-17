import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LegendInfo, VoxelVariable } from '../../types/types';

type SlicePlaneOrientation = 'vertical' | 'horizontal';

export type MapState = {
  voxelVariables: VoxelVariable[];
  legendInfos: LegendInfo[];
  sliceEnabled: boolean;
  slicePlaneOrientation: SlicePlaneOrientation;
};

const initialMapState: MapState = {
  voxelVariables: [],
  legendInfos: [],
  sliceEnabled: false,
  slicePlaneOrientation: 'vertical'
};

const slice = createSlice({
  name: 'Map',
  initialState: initialMapState,
  reducers: {
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
    },
    toggleSlice: (state) => {
      state.sliceEnabled = !state.sliceEnabled;
    },
    setSlicePlaneOrientation: (state, action: PayloadAction<SlicePlaneOrientation>) => {
      state.slicePlaneOrientation = action.payload;
    }
  }
});

export const { setVoxelVariables, setSelectedVariable, setLegendInfos, toggleSlice, setSlicePlaneOrientation } =
  slice.actions;

export const { reducer } = slice;
