import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import categoryReducer from "./slice/categorySlice"

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "myApp",
    storage,
};

const store = configureStore({
    reducer:{
        counter:counterReducer,
        category:categoryReducer,
    },
})



export default store;