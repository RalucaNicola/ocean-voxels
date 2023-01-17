import { ReactNode } from 'react';

type Color = { r: number; g: number; b: number; a: number };

export type VoxelVariable = {
  description: string;
  name: string;
  id: number;
  unit: string;
  continuous: boolean;
  selected: boolean;
};

type VoxelColorStop = {
  color: Color;
  position: number;
};

export type VoxelUniqueValue = {
  color: Color;
  value: number;
  label?: string;
  enabled?: boolean;
};

export type LegendInfo = {
  id: number;
  continuous: boolean;
  range?: number[];
  colorStops?: VoxelColorStop[];
  uniqueValues?: VoxelUniqueValue[];
};

export interface LegendProps {
  legendInfo: LegendInfo;
  children?: ReactNode;
}

export type EmuVariable = 'Temperature' | 'Salinity' | 'Dissolved O2' | 'Phosphate' | 'Nitrate' | 'Silicate';

export interface SlicePlaneInfo {
  latitude: number;
  longitude: number;
  z: number;
  tilt: number;
  width: number;
  height: number;
  heading: number;
}
