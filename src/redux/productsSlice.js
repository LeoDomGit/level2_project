import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk('products/getProducts' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/home?apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})
export const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:false
    },
    extraReducers:{
       [getProducts.pending]:(state,action)=>{
        state.loading=true;
       },
       [getProducts.fulfilled]:(state,action)=>{
        state.loading=false;
        console.log(action.payload.products);
        state.products=action.payload.products
       },
       [getProducts.rejected]:(state,action)=>{
        state.loading=false;
    }
    }
})
export default productsSlice.reducer