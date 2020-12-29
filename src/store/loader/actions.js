import {
    createAction
} from '@reduxjs/toolkit';

const showLoader = createAction("SHOW_LOADER");
const hideLoader = createAction("HIDE_LOADER");

const startLoader = () => {
    return {
        type: showLoader.type,
        payload: {}
    }
}
const stopLoader = () => {
    return {
        type: hideLoader.type,
        payload: {}
    }
}
export {
    startLoader,
    stopLoader,
    showLoader,
    hideLoader
}