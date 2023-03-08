import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook,useSelector } from "react-redux";
import ReduxState from "./ReduxState";
import {
    persistReducer,
    REHYDRATE,
    PURGE,
    FLUSH,
    PAUSE,
    REGISTER,
    PERSIST
} from "redux-persist"
import storage from "redux-persist/lib/storage";
// import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
const persistConfigure={
    key:"piggyVes",
    storage,
    version:1,
}
const persistReducers = persistReducer(persistConfigure,ReduxState)
export const store = configureStore({
    reducer:persistReducers,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
             ignoredActions:[FLUSH,PURGE,PERSIST,REHYDRATE,REGISTER,PAUSE],
        }
    })
})
export const appDispatch:()=> typeof store.dispatch = useDispatch;
export const appSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>>= useSelector;