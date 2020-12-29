import {
    createSlice
} from "@reduxjs/toolkit";
import {
    addProduct,
    removeProduct
} from "./actions";

const product = createSlice({
    name: "product",
    initialState: {},
    extraReducers: {
        [addProduct.type]: (product, action) => {
            product = Object.assign({}, action.payload);
            return product;
        },
        [removeProduct.type]: (product, action) => {
            product = {};
            return product;
        }
    },
});
const productReducer = product.reducer;
export default productReducer;