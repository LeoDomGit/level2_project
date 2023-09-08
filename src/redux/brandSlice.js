import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getBrand = createAsyncThunk('brands/getBrands' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/home?apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})
export const brandSlice = createSlice({
    name: 'brands',
    initialState:{
        brands:[],
        loading1:false
    },
    extraReducers:{
        [getBrand.pending]: (state,action)=>{
            state.loading1=true;
        },
        [getBrand.fulfilled]:(state,action)=>{
            state.loading1=false;
            state.brands= action.payload.brands
        },
        [getBrand.rejected]:(state,action)=>{
            state.loading1=false;
        }
    }
})
export default brandSlice.reducer