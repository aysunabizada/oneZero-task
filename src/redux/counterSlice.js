import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 1
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value > 1 ? state.value - 1 : 1;
        }
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
