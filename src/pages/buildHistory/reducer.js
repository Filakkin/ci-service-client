import { createSlice } from '@reduxjs/toolkit';
import { asyncFetchBuilds } from '../../stub/api/fetchBuilds';

export const settingsSlice = createSlice({
    name: 'builds',
    initialState: {status: 'idle', list:[]},
    reducers: {
        push: (state, action) => {
            console.log("PUSH ACTION", action)
            state.list.unshift(action.payload);
        },
        listLoading: (state) => {
            state.status = 'loading';
        },
        listLoaded: (state, action) => {
            state.list.push(...action.payload);
            state.status = 'idle';
        }
    }
})

export const { push, listLoaded, listLoading } = settingsSlice.actions;

export const fetchBuilds = () => async (dispatch) => {
    dispatch(listLoading())
    const response = await asyncFetchBuilds(5)
    dispatch(listLoaded(response))
  }

export default settingsSlice.reducer;