import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./redux/todoSlice";
export const store = configureStore({
    reducer:{
        task:taskReducer
    }
})