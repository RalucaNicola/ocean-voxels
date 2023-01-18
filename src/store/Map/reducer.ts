import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_SECTION_PARAMETERS } from '../../config';
import { LegendInfo, SectionParameters, VoxelVariable } from '../../types/types';

type SlicePlaneOrientation = 'vertical' | 'horizontal';

export type MapState = {
  voxelVariables: VoxelVariable[];
  legendInfos: LegendInfo[];
  sliceEnabled: boolean;
  slicePlaneOrientation: SlicePlaneOrientation;
  sectionEnabled: boolean;
  sectionParameters: SectionParameters;
  isosurfaceEnabled: boolean;
  offsetFromGround: number;
};

const initialMapState: MapState = {
  voxelVariables: [],
  legendInfos: [],
  sliceEnabled: false,
  slicePlaneOrientation: 'vertical',
  sectionEnabled: false,
  sectionParameters: INITIAL_SECTION_PARAMETERS,
  isosurfaceEnabled: false,
  offsetFromGround: 500000
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
    },
    toggleSection: (state) => {
      state.sectionEnabled = !state.sectionEnabled;
    },
    setSectionParameters: (state, action: PayloadAction<SectionParameters>) => {
      state.sectionParameters = action.payload;
    },
    setOffsetFromGround: (state, action: PayloadAction<number>) => {
      state.offsetFromGround = action.payload;
    }
  }
});

export const {
  setVoxelVariables,
  setSelectedVariable,
  setLegendInfos,
  toggleSlice,
  setSlicePlaneOrientation,
  toggleSection,
  setSectionParameters,
  setOffsetFromGround
} = slice.actions;

export const { reducer } = slice;
