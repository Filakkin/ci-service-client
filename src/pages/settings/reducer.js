import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        interval: 10
    },
    reducers: {
        saveSettings: (state, action) => {

            console.log("REDUX ACTION", action)
            state.interval = action.payload.interval;
            state.repository = action.payload.repository;
            state.branch = action.payload.branch;
            state.command = action.payload.command;
        }
    }
})

export const { saveSettings } = settingsSlice.actions;

export default settingsSlice.reducer;