import { configureStore, getDefaultMiddleware, getType } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postAPI } from "../services/PostApi";
import { userSlice } from "./Reducers/userSlice";




const rootReducer = combineReducers({
    user : userSlice.reducer,
    [postAPI.reducerPath] : postAPI.reducer,
});

export const SetStore = ()=> {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
    })
}

export type ReducerState = ReturnType<typeof rootReducer>;
export type StoreState = ReturnType<typeof SetStore>;
export type DispatchState = StoreState['dispatch'];


