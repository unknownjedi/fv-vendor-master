import productReducer from "./product/reducer";
import loadingReducer from "./loader/reducer";
const {
    combineReducers
} = require("@reduxjs/toolkit");

const reducer = combineReducers({
    product: productReducer,
    loading: loadingReducer
})

export default reducer;