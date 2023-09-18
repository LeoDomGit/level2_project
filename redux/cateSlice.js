import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getCates = createAsyncThunk('cates/getCates' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/home?apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})
export const cateSlice = createSlice({
    name: 'cates',
    initialState:{
        cates:[],
        loading:false
    },
    extraReducers:{
        [getCates.pending]: (state,action)=>{
            state.loading=true;
        },
        [getCates.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cates= action.payload.categrories;
        },
        [getCates.rejected]:(state,action)=>{
            state.loading=false;
        }
    }
})
export default cateSlice.reducer