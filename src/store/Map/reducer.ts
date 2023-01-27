import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_SECTION_PARAMETERS } from '../../config';
import { LegendInfo, SectionParameters, TooltipData, VoxelVariable } from '../../types/types';

type SlicePlaneOrientation = 'vertical' | 'horizontal' | 'custom';
type TooltipPosition = { x: number; y: number };

export type MapState = {
  voxelVariables: VoxelVariable[];
  legendInfos: LegendInfo[];
  sliceEnabled: boolean;
  slicePlaneOrientation: SlicePlaneOrientation;
  sectionEnabled: boolean;
  sectionParameters: SectionParameters;
  isosurfaceEnabled: boolean;
  offsetFromGround: number;
  hoverEnabled: boolean;
  tooltipPosition: TooltipPosition | null;
  tooltipData: TooltipData | null;
  introScreenEnabled: boolean;
  toolsMenuVisible: boolean;
  variablesMenuVisible: boolean;
};

const initialMapState: MapState = {
  voxelVariables: [],
  legendInfos: [],
  sliceEnabled: false,
  slicePlaneOrientation: 'vertical',
  sectionEnabled: false,
  sectionParameters: INITIAL_SECTION_PARAMETERS,
  isosurfaceEnabled: false,
  offsetFromGround: 500000,
  hoverEnabled: false,
  tooltipPosition: null,
  tooltipData: null,
  introScreenEnabled: true,
  toolsMenuVisible: false,
  variablesMenuVisible: true
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
    },
    toggleIsosurface: (state) => {
      state.isosurfaceEnabled = !state.isosurfaceEnabled;
    },
    setSelectedIsosurfaceValue: (state, action: PayloadAction<{ id: number; isosurfaceValue: number }>) => {
      state.voxelVariables = state.voxelVariables.map((variable) => {
        if (variable.id === action.payload.id) {
          variable.isosurfaceValue = action.payload.isosurfaceValue;
        }
        return variable;
      });
    },
    toggleHoverEnabled: (state) => {
      state.hoverEnabled = !state.hoverEnabled;
    },
    setTooltipPosition: (state, action: PayloadAction<TooltipPosition>) => {
      state.tooltipPosition = action.payload;
    },
    setTooltipData: (state, action: PayloadAction<TooltipData>) => {
      state.tooltipData = action.payload;
    },
    toggleIntroScreen: (state) => {
      state.introScreenEnabled = !state.introScreenEnabled;
    },
    setToolsMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.toolsMenuVisible = action.payload;
    },
    setVariablesMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.variablesMenuVisible = action.payload;
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
  setOffsetFromGround,
  setSelectedIsosurfaceValue,
  toggleIsosurface,
  toggleHoverEnabled,
  setTooltipPosition,
  setTooltipData,
  toggleIntroScreen,
  setToolsMenuVisible,
  setVariablesMenuVisible
} = slice.actions;

export const { reducer } = slice;
