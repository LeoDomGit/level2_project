import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./redux/todoSlice";
import brandReducer from "./redux/brandSlice";
import cateReducer from "./redux/cateSlice";
import taskReducer1 from "./redux/todoSlice1";

export const store = configureStore({
    reducer:{
        task:taskReducer,
        brand:brandReducer,
        cate:cateReducer,
        task1:taskReducer1,
    }
})