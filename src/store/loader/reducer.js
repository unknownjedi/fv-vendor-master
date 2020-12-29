import {
    createSlice
} from "@reduxjs/toolkit";
import {
    showLoader,
    hideLoader
} from "./actions";

const loader = createSlice({
    name: "loading",
    initialState: false,
    extraReducers: {
        [showLoader.type]: (loading, action) => {
            return true;
        },
        [hideLoader.type]: (loading, action) => {
            return false;
        }
    },
});
const loadingReducer = loader.reducer;
export default loadingReducer;