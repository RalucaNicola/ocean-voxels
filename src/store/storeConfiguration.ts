import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as mapReducer } from './Map/reducer';

export const getPreloadedState = () => {
  return {};
};

const rootReducer = combineReducers({ Map: mapReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const configureAppStore = (preloadedState: {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};
