import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        goods: {},
        total: 0
    },
    reducers: {
        add: (state, data) => {
            let good = data.payload;
            if (state.goods[good.articul] == undefined) {
                state.goods[good.articul] = {
                    title: good.title,
                    img: good.image,
                    number: 1,
                    summ: good.cost,
                    articul: good.articul
                }
            } else {
                state.goods[good.articul].number++;
                state.goods[good.articul].summ += good.cost;
            }
            state.total += good.cost;
        },
        increase: (state, data) => {
            let articul = data.payload;

            state.total += state.goods[articul].summ / state.goods[articul].number;
            state.goods[articul].summ += state.goods[articul].summ / state.goods[articul].number;
            state.goods[articul].number++;
        },
        decrease: (state, data) => {
            let articul = data.payload;

            state.total -= state.goods[articul].summ / state.goods[articul].number;
            state.goods[articul].summ -= state.goods[articul].summ / state.goods[articul].number;
            state.goods[articul].number--;

            if (state.goods[articul].number == 0) {
                delete state.goods[articul];
            }
        },
        remove: (state, data) => {
            let articul = data.payload;
            state.total -= state.goods[articul].summ;
            delete state.goods[articul];
        }

    }
})

export const { add, increase, decrease, remove } = cartSlice.actions;
export const selectCart = state => {
    let goodsArr = [];
    for (const key in state.cart.goods) {
        goodsArr.push(state.cart.goods[key])
    }
    return {
        goods: goodsArr,
        total: state.cart.total
    }
}
export default cartSlice.reducer;