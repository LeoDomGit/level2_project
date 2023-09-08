import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getCart = createAsyncThunk('carts/getCart' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/home?apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})
export const cartSlice = createSlice({
    name: 'carts',
    initialState:{
        carts:[],
        loading2:false
    },
    extraReducers:{
        [getCart.pending]: (state,action)=>{
            state.loading2=true;
        },
        [getCart.fulfilled]:(state,action)=>{
            state.loading2=false;
            state.carts= action.payload.carts
        },
        [getCart.rejected]:(state,action)=>{
            state.loading2=false;
        }
    }
})
export default cartSlice.reducer