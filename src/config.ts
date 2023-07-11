import { EmuVariable } from './types/types';

export const WEB_SCENE_ID = '7a38f3d661cc4134aa64b10a5144f00f';
export const VOXEL_LAYER_TITLE = 'EMU v5';
export const VARIABLE_MAP = {
  cluster37: 'Ecological marine units',
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

export const INITIAL_SECTION_PARAMETERS = {
  x: 0,
  y: 0,
  z: 0,
  tilt: 90,
  orientation: 90
};

export const INITIAL_SELECTED_VARIABLE = 'nitrate';
export const INITIAL_VERTICAL_OFFSET = 2500;

export const EMU_INFO_DATA = [
  {
    id: 0,
    fill: '#000',
    description: 'Epipelagic, Moderate to Cool, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cool, Normal Salinity, Moderate Oxygen, Medium Nitrate, Low Phosphate, Low Silicate'
  },
  {
    id: 1,
    fill: '#ef5b72',
    description: 'Mesopelagic, Cold, Polyhaline, Severely Hypoxic, Low Nitrate, Medium Phosphate, High Silicate',
    common: 'Moderate Depth, Cold, Low Salinity, Very Low Oxygen, Low Nitrate, Medium Phosphate, High Silicate',
    region: 'Black Caspian Seas Mesopelagic',
    percent: 0.01
  },
  {
    id: 2,
    fill: '#dc651e',
    description: 'Epipelagic, Cold, Polyhaline, Hypoxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cold, Low Salinity, Low Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Black and Caspiam Seas Epipelagic',
    percent: 0
  },
  {
    id: 3,
    fill: '#708cd9',
    description: 'Bathypelagic, Very Cold, Euhaline, Severely Hypoxic, High Nitrate, Medium Phosphate, High Silicate',
    common: 'Deep, Very Cold, Normal Salinity, Very Low Oxygen, High Nitrate, Medium Phosphate, High Silicate',
    region: 'North Pacific and Arabian Sea Bathypelagic',
    percent: 7.09
  },
  {
    id: 4,
    fill: '#90278e',
    description: 'Mesopelagic, Cold, Polyhaline, Severely Hypoxic, Low Nitrate, High Phosphate, High Silicate',
    common: 'Moderate Depth, Cold, Low Salinity, Very Low Oxygen, Low Nitrate, High Phosphate, High Silicate',
    region: 'Black Sea Medopelagic',
    percent: 0.01
  },
  {
    id: 5,
    fill: '#a0d7d1',
    description: 'Epipelagic, Superchilled, Polyhaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Superchilled, Low Salinity, High Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Arctic Epipelagic',
    percent: 0.01
  },
  {
    id: 6,
    fill: '#ffd300',
    description: 'Epipelagic, Cold, Polyhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cold, Low Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Black and Caspian Seas  Epipelagic',
    percent: 0.0
  },
  {
    id: 7,
    fill: '#c30075',
    description: 'Epiplagic, Moderate to Cool, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cool, Very Low Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Caspian Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 8,
    fill: '#c2abbb',
    description: 'Epipelagic, Moderate to Cool, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cool, Normal Salinity, Moderate Oxygen, Medium Nitrate, Low Phosphate, Low Silicate',
    region: 'Subantarctic, North Atlantic, and North Pacific Epipelagic',
    percent: 1.92
  },
  {
    id: 9,
    fill: '#c5b6d0',
    description: 'Mesopelagic, Moderate to Cool, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Moderate Depth, Cool, Normal Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Mediteranean and Red Seas Mesopelagic',
    percent: 0.29
  },
  {
    id: 10,
    fill: '#7570e6',
    description: 'Mesopelagic, Cold, Euhaline, Severely Hypoxic, High Nitrate, Low Phosphate, Low Silicate',
    common: 'Moderate Depth, Cold, Normal Salinity, Very Low Oxygen, High Nitrate, Low Phosphate, Low Silicate',
    region: 'Equatorial Indian, Tropical Atlantic, and Tropical Pacific Mesopelagic',
    percent: 3.34
  },
  {
    id: 11,
    fill: '#cabfd9',
    description: 'Epipelagic, Moderate to Cool, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cool, Normal Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Northern Subtropical and Southern Subtropical Epipelagic',
    percent: 1.68
  },
  {
    id: 12,
    fill: '#6aa644',
    description: 'Epipelagic, Very Cold, Mesohaline, Severely Hypoxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Very Cold, Very Low Salinity, Very Low Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Baltic Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 13,
    fill: '#364799',
    description: 'Bathypelagic, Very Cold, Euhaline, Hypoxic, High Nitrate, Medium Phosphate, High Silicate',
    common: 'Deep, Very Cold, Normal Salinity, Low Oxygen, High Nitrate, Medium Phosphate, High Silicate',
    region: 'Pacific and Indian Bathypelagic',
    percent: 25.4
  },
  {
    id: 14,
    fill: '#465290',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, High Nitrate, Low Phosphate, High Silicate',
    common: 'Deep, Very Cold, Normal Salinity, Moderate Oxygen, High Nitrate, Low Phosphate, High Silicate',
    region: 'Antarctic and  Subantarctic  Bathypelagic',
    percent: 20.31
  },
  {
    id: 15,
    fill: '#b31e8d',
    description: 'Bathypelagic, Cold, Polyhaline, Anoxic, Low Nitrate, High Phosphate, High Silicate',
    common: 'Deep, Cold, Low Salinity, No Oxygen, Low Nitrate, High Phosphate, High Silicate',
    region: 'Black Sea Bathypelagic',
    percent: 0.02
  },
  {
    id: 16,
    fill: '#00707e',
    description: 'Epipelagic, Very Cold, Mesohaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Very Cold, Very Low Salinity, High Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Baltic Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 17,
    fill: '#af5232',
    description: 'Epipelagic, Cold, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cold, Very Low Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Baltic Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 18,
    fill: '#eb96cc',
    description: 'Epipelagic, Warm to Very Warm, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Warm, Normal Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'North Pacific Subtropical and Equatorial Indian Epipelagic',
    percent: 0.44
  },
  {
    id: 19,
    fill: '#b9caf6',
    description: 'Epipelagic, Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cold, Normal Salinity, Moderate Oxygen, Medium Nitrate, Low Phosphate, Low Silicate',
    region: 'Subantarctic and North Pacific Subtropical Epipelagic',
    percent: 1.03
  },
  {
    id: 20,
    fill: '#008f4c',
    description: 'Epipelagic, Very Cold, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Very Cold, Very Low Salinity, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Baltic Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 21,
    fill: '#ebbccd',
    description: 'Epipelagic, Warm to Very Warm, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Warm, Normal Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Atlantic Subtropical and South Pacific Subtropical Epipelagic',
    percent: 0.79
  },
  {
    id: 22,
    fill: '#7c9540',
    description: 'Epipelagic, Cold, Mesohaline, Hypoxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cold, Very Low Salinity, Low Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Baltic and Black Seas Epipelagic',
    percent: 0.0
  },
  {
    id: 23,
    fill: '#a0d7d1',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Superchilled, Normal Salinity, High Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Arctic and Labrador Sea Epipelagic',
    percent: 0.03
  },
  {
    id: 24,
    fill: '#eba9d4',
    description: 'Epipelagic, Warm to Very Warm, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Warm, Normal Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Tropical Pacific, Tropical Indian, and Equatorial Atlantic Epipelagic',
    percent: 0.85
  },
  {
    id: 25,
    fill: '#a0d7d1',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Highly Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Superchilled, Normal Salinity, High Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Arctic and Labrador Sea Epipelagic',
    percent: 0.02
  },
  {
    id: 26,
    fill: '#9365e6',
    description: 'Mesopelagic, Moderate to Cool, Euhaline, Hypoxic, Medium Nitrate, Low Phosphate, Low Silicate',
    common: 'Moderate Depth, Cool, Normal Salinity, Low Oxygen, Medium Nitrate, Low Phosphate, Low Silicate',
    region: 'Tropical and Subtropical Mesopelagic',
    percent: 1.93
  },
  {
    id: 27,
    fill: '#832E62',
    description: 'Epipelagic, Very Cold, Polyhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Very Cold, Low Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Caspian Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 28,
    fill: '#567542',
    description: 'Epiplagic, Moderate to Cool, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Cool, Very Low Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Caspian Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 29,
    fill: '#4792c9',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate',
    common: 'Deep, Very Cold, Normal Salinity, Moderate Oxygen, Medium Nitrate, Low Phosphate, Low Silicate',
    region: 'Arctic and North Atlantic Bathypelagic',
    percent: 2.88
  },
  {
    id: 30,
    fill: '#add5e7',
    description: 'Epipelagic, Very Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Very Cold, Normal Salinity, Moderate Oxygen, Medium Nitrate, Low Phosphate, Low Silicate',
    region: 'North Pacific and Beaufort Sea Epipelagic',
    percent: 0.12
  },
  {
    id: 31,
    fill: '#9ad4e6',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Medium Silicate',
    common: 'Shallow, Superchilled, Normal Salinity, Moderate Oxygen, Medium Nitrate, Low Phosphate, Medium Silicate',
    region: 'Antarctic and Bering Sea Epipelagic',
    percent: 0.58
  },
  {
    id: 32,
    fill: '#bf6a85',
    description: 'Epipelagic, Warm to Very Warm, Mesohaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Warm, Very Low Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Caspian Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 33,
    fill: '#5d7ed9',
    description: 'Mesopelagic, Very Cold, Euhaline, Severely Hypoxic, High Nitrate, Medium Phosphate, Medium Silicate',
    common:
      'Moderate Depth, Very Cold, Normal Salinity, Very Low Oxygen, High Nitrate, Medium Phosphate, Medium Silicate',
    region: 'Tropical Pacific and Tropical Indian Mesopelagic',
    percent: 6.41
  },
  {
    id: 34,
    fill: '#f58c58',
    description: 'Epipelagic, Very Cold, Polyhaline, Anoxic, Low Nitrate, High Phosphate, High Silicate',
    common: 'Shallow, Very Cold, Low Salinity, No Oxygen, Low Nitrate, High Phosphate, High Silicate',
    region: 'Black Sea Epipelagic',
    percent: 0.0
  },
  {
    id: 35,
    fill: '#9bd9ec',
    description: 'Epipelagic, Frozen/Superchilled, Euhaline, Oxic, Low Nitrate, Low Phosphate, Low Silicate',
    common: 'Shallow, Superchilled, Normal Salinity, Moderate Oxygen, Low Nitrate, Low Phosphate, Low Silicate',
    region: 'Arctic and Labrador Sea Epipelagic',
    percent: 0.07
  },
  {
    id: 36,
    fill: '#ff52aa',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, Medium Nitrate, Low Phosphate, Low Silicate',
    common: 'Deep, Very Cold, Normal Salinity, Moderate Oxygen, Medium Nitrate, Low Phosphate, Low Silicate',
    region: 'Atlantic, Subantarctic, and North Pacific Subtropical Bathypelagic',
    percent: 13.61
  },
  {
    id: 37,
    fill: '#4792c9',
    description: 'Bathypelagic, Very Cold, Euhaline, Oxic, High Nitrate, Low Phosphate, Medium Silicate',
    common: 'Deep, Very Cold, Normal Salinity, Moderate Oxygen, High Nitrate, Low Phosphate, Medium Silicate',
    region: 'Subantarctic, South Atlantic and North Pacific Bathypelagic',
    percent: 11.13
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
