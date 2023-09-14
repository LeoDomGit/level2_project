import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
var id = JSON.parse(localStorage.getItem('cart'));
export const getCart = createAsyncThunk('carts/getCart' , async ()=>{
    if(id.length>0){
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
    }
    
})
export const cartSlice = createSlice({
    name: 'carts',
    initialState:{
        carts:[],
        loading2:false,
        count:0,
    },
    reducers:{
        deleteItem : (state,action)=>{
            state.carts= state.carts.filter((item)=>item[0] !== action.payload);
            var cart = JSON.parse(localStorage.getItem('cart'));
            cart = cart.filter((item)=>item[0] != action.payload);
            if(cart.length>0){
                localStorage.setItem('cart',JSON.stringify(cart));
            }else{
                localStorage.removeItem('cart');

            }
        },
        countCart:(state,action)=>{
            return state.count;
        }
    },
    extraReducers:{
        [getCart.pending]: (state,action)=>{
            state.loading2=true;
        },
        [getCart.fulfilled]:(state,action)=>{
            state.loading2=false;
            state.carts= action.payload.result;
        },
        [getCart.rejected]:(state,action)=>{
            state.loading2=false;
        }
    }
})
export const {deleteItem,countCart} = cartSlice.actions;

export default cartSlice.reducer