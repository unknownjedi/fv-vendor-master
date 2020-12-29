import productReducer from "./product/reducer";
const {
    combineReducers
} = require("@reduxjs/toolkit");

const reducer = combineReducers({
    product: productReducer
})

export default reducer;