import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getTodo = createAsyncThunk('todos/getTodos' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/todo?apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})