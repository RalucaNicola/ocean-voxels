import { EmuVariable } from './types/types';

export const WEB_SCENE_ID = '62c92f0a45d34567aa73a9efaa80949c';
export const VOXEL_LAYER_TITLE = 'EMU v5';
export const VARIABLE_MAP = {
  general_name: 'Ecological marine units',
  temp: 'Temperature',
  salinity: 'Salinity',
  dissO2: 'Dissolved O2',
  nitrate: 'Nitrate',
  phosphate: 'Phosphate',
  silicate: 'Silicate'
};

export const VERTICAL_SLICE_PLANE = {
  latitude: 0,
  longitude: 0,
  z: 0,
  tilt: 90,
  width: 2.5 * Math.pow(10, 7),
  height: Math.pow(10, 7),
  heading: 90
};

export const HORIZONTAL_SLICE_PLANE = {
  latitude: 0,
  longitude: 0,
  z: Math.pow(10, 6),
  tilt: 0,
  width: 2.5 * Math.pow(10, 7),
  height: 3 * Math.pow(10, 7),
  heading: 90
};

export const INITIAL_SELECTED_VARIABLE = 'general_name';

export const EMU_INFO_DATA = [
  {
    id: 0,
    fill: '#ffffff',
    description: 'Epipelagic, Moderate to Cool, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 1,
    fill: '#ef5b72',
    description: 'Mesopelagic, Cold, Polyhaline, Severely Hypoxic, Low Nitrate, Medium Phosphate, High Silicate'
  },
  {
    id: 2,
    fill: '#dc651e',
    description: 'Epipelagic, Cold, Polyhaline, Hypoxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 3,
    fill: '#708cd9',
    description: 'Bathypelagic, Very Cold, Euhaline, Severely Hypoxic, High Nitrate, Medium Phosphate, High Silicate'
  },
  {
    id: 4,
    fill: '#90278e',
    description: 'Mesopelagic, Cold, Polyhaline, Severely Hypoxic, Low Nitrate, High Phosphate, High Silicate'
  },
  {
    id: 5,
    fill: '#a0d7d1',
    description: 'Epipelagic, Superchilled, Polyhaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 6,
    fill: '#ffd300',
    description: 'Epipelagic, Cold, Polyhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 7,
    fill: '#c30075',
    description: 'Epiplagic, Moderate to Cool, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 8,
    fill: '#c2abbb',
    description: 'Epipelagic, Moderate to Cool, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 9,
    fill: '#c5b6d0',
    description: 'Mesopelagic, Moderate to Cool, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 10,
    fill: '#7570e6',
    description: 'Mesopelagic, Cold, Euhaline, Severely Hypoxic, High Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 11,
    fill: '#cabfd9',
    description: 'Epipelagic, Moderate to Cool, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 12,
    fill: '#6aa644',
    description: 'Epipelagic, Very Cold, Mesohaline, Severely Hypoxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 13,
    fill: '#364799',
    description: 'Bathypelagic, Very Cold, Euhaline, Hypoxic, High Nitrate, Medium Phosphate, High Silicate'
  },
  {
    id: 14,
    fill: '#465290',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, High Nitrate, Low Phosphate, High Silicate'
  },
  {
    id: 15,
    fill: '#b31e8d',
    description: 'Bathypelagic, Cold, Polyhaline, Anoxic, Low Nitrate, High Phosphate, High Silicate'
  },
  {
    id: 16,
    fill: '#00707e',
    description: 'Epipelagic, Very Cold, Mesohaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 17,
    fill: '#af5232',
    description: 'Epipelagic, Cold, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 18,
    fill: '#eb96cc',
    description: 'Epipelagic, Warm to Very Warm, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 19,
    fill: '#b9caf6',
    description: 'Epipelagic, Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 20,
    fill: '#008f4c',
    description: 'Epipelagic, Very Cold, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 21,

    fill: '#ebbccd',
    description: 'Epipelagic, Warm to Very Warm, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 22,
    fill: '#7c9540',
    description: 'Epipelagic, Cold, Mesohaline, Hypoxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 23,
    fill: '#a0d7d1',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 24,
    fill: '#eba9d4',
    description: 'Epipelagic, Warm to Very Warm, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 25,
    fill: '#a0d7d1',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 26,
    fill: '#9365e6',
    description: 'Mesopelagic, Moderate to Cool, Euhaline, Hypoxic, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 27,
    fill: '#832E62',
    description: 'Epipelagic, Very Cold, Polyhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 28,
    fill: '#567542',
    description: 'Epiplagic, Moderate to Cool, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 29,
    fill: '#4792c9',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 30,
    fill: '#add5e7',
    description: 'Epipelagic, Very Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 31,
    fill: '#9ad4e6',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Medium Silicate'
  },
  {
    id: 32,
    fill: '#bf6a85',
    description: 'Epipelagic, Warm to Very Warm, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 33,
    fill: '#5d7ed9',
    description: 'Mesopelagic, Very Cold, Euhaline, Severely Hypoxic, High Nitrate, Medium Phosphate, Medium Silicate'
  },
  {
    id: 34,
    fill: '#f58c58',
    description: 'Mesopelagic, Very Cold, Polyhaline, Anoxic, Low Nitrate, High Phosphate, High Silicate'
  },
  {
    id: 35,
    fill: '#9bd9ec',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 36,
    fill: '#ff52aa',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 37,
    fill: '#4792c9',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, High Nitrate, Low Phosphate, Medium Silicate'
  }
];

export const EMU_UNITS: Record<EmuVariable, string> = {
  'Temperature': String.fromCodePoint(8451),
  'Salinity': '',
  'Dissolved O2': 'ml/l',
  'Phosphate': 'µmol/l',
  'Nitrate': 'µmol/l',
  'Silicate': 'µmol/l'
};
