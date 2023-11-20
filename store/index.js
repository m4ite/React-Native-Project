import { configureStore } from '@reduxjs/toolkit';
import { funcionariosSlice } from './slice';

export const store = configureStore({
    reducer:{
        list: funcionariosSlice.reducer
    }
})