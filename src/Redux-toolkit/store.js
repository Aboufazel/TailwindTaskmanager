import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import categoryReducer from "./slice/categorySlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "myApp",
    storage,
};


const rootReducer = combineReducers({
    counter:counterReducer,
    category:categoryReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer:persistedReducer,
})

export const persistor = persistStore(store);

export default store;