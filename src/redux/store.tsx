"use client"

import {Action, ThunkAction, combineReducers, configureStore, ConfigureStoreOptions} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import selectedIdReducer from './slice/dataTableSlice';
import selectedIdReducer2 from './slice/dataTableSlice2';
import nodeDataReducer from './slice/nodeDataSlice';
import jsxStringSlice from './slice/jsxStringSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import searchReducer from './slice/searchSlice';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    stateReconcile: autoMergeLevel2
}
 
export const rootReducer = combineReducers({
    selectedId: selectedIdReducer,
    selectedId2: selectedIdReducer2,
    nodeData: nodeDataReducer,
    jsxString: jsxStringSlice,
    search: searchReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined,) =>  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),...options,
})

export const store = createStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
const  persistor = persistStore(store); 
export { persistor }