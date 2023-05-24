import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export type UserState = {

}

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        loading: false,
        success: false,
    } as UserState,
    reducers: {
        setAuth: (state: UserState, action) => {
            //
        },
    },
    extraReducers: (builder) => {
        //
    },
});

export const selectAuth = (state: RootState) => state.user;
export const { setAuth } = userSlice.actions;
