import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from '../pages/settings/reducers.js';

export default configureStore({
  reducer: {
      settings: settingsReducer,
  },
})