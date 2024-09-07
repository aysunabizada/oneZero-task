import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataMenu = createAsyncThunk("menu/get", async () => {
    const res = await axios.get("http://localhost:5000/data")
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
                state.data = {
                    categories: action.payload.categories?.filter(category => !category.isArchived),
                    products: action.payload.products?.filter(product => !product.isArchived)
                };
                state.loading = false;
            })
            .addCase(dataMenu.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setCategoryFilter, setProductForModal } = menuSlice.actions;
export default menuSlice.reducer;
