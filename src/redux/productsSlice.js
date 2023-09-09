import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk('products/getProducts' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/home1?limit=99&apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})
export const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loadingP:false
    },
    extraReducers:{
       [getProducts.pending]:(state,action)=>{
        state.loadingP=true;
       },
       [getProducts.fulfilled]:(state,action)=>{
        state.loadingP=false;
        state.products=action.payload.products
       },
       [getProducts.rejected]:(state,action)=>{
        state.loading=false;
    }
    }
})
export default productsSlice.reducer