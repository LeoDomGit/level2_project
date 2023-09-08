import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getCart = createAsyncThunk('carts/getCart' , async ()=>{
    var id = JSON.parse(localStorage.getItem('cart'));
    var token='';
    if(localStorage.getItem('token') && localStorage.getItem('token')!=null){
        token=localStorage.getItem('token')
    }
    var data = new URLSearchParams();
    data.append('apitoken', localStorage.getItem('token'));
    data.append('id', JSON.stringify(id));
    return fetch("https://students.trungthanhweb.com/api/getCart", {
        method: "POST",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body:data
    })
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
            state.carts= action.payload.result
        },
        [getCart.rejected]:(state,action)=>{
            state.loading2=false;
        }
    }
})
export default cartSlice.reducer