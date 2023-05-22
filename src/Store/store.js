import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Redux/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "./Redux/postSlice";

const persistConfig={
    key:"root",     
    storage
}

const reducers = combineReducers({
    user:authSlice,
    posts:postSlice
})

const persistedReducer=persistReducer(persistConfig,reducers)

const store= configureStore({
    reducer:persistedReducer,
})

export default store;