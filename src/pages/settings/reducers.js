import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        interval: 10
    },
    reducers: {
        saveSettings: (state, action) => {

            console.log("REDUX ACTION", action)
            state = action.payload;
        }
    }
})

export const { saveSettings } = settingsSlice.actions;

export default settingsSlice.reducer;