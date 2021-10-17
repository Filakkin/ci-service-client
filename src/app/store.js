import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from '../pages/settings/reducer.js';
import buildsReducer from '../pages/buildHistory/reducer.js';

export default configureStore({
  reducer: {
      settings: settingsReducer,
      builds: buildsReducer
  },
})