import { createSlice } from "@reduxjs/toolkit";
import data from "../data/goods.json"

export const goodsSlice = createSlice({
    name: "goods",
    initialState: {
        value: data,
    },
    reducers: {

    }
})

export const selectGoods = store => store.goods.value;
export const { } = goodsSlice.actions;
export default goodsSlice.reducer;