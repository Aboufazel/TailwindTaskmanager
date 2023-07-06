import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import categoryReducer from "./slice/categorySlice"


const store = configureStore({
    reducer:{
        counter:counterReducer,
        category:categoryReducer,
    },
})



export default store;