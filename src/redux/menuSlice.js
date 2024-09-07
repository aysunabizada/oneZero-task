import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataMenu = createAsyncThunk("menu/get", async () => {
    const res = await axios.get("./menu.json")
    return res.data
})

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        data: [],
        loading: false,
        selectedCategory: 'all',
    },
    reducers: {
        setCategoryFilter(state, action) {
            state.selectedCategory = action.payload;
        },
        setProductForModal(state, action) {
            state.selectedProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(dataMenu.pending, (state) => {
                state.loading = true;
            })
            .addCase(dataMenu.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(dataMenu.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setCategoryFilter, setProductForModal } = menuSlice.actions;
export default menuSlice.reducer;
