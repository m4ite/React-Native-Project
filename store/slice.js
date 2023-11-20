import { createSlice } from '@reduxjs/toolkit';

const funcionariosInitialState = {
    value: []
}

export const funcionariosSlice = createSlice({
    name: "funcionarios",
    initialState: funcionariosInitialState,
    reducers:{
        register: (state, newUser) => {
            state.value = [...state.value, newUser.payload]
        }
    }
})