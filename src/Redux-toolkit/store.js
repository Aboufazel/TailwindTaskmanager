import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import categoryReducer from "./slice/categorySlice"
import toastReducer from "./slice/toastSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "taskManagerApp",
    storage,
};


const rootReducer = combineReducers({
    counter:counterReducer,
    category:categoryReducer,
    toast:toastReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer:persistedReducer,
})

export const persistor = persistStore(store);

export default store;