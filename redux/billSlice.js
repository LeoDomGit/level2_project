import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getBill = createAsyncThunk('bills/getBill',async ()=>{
    if(localStorage.getItem('token') && localStorage.getItem('token')!=null){
        return fetch("https://students.trungthanhweb.com/api/bills1?apitoken="+localStorage.getItem('token'), {
            method: "GET",
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
        })
        .then((res)=>res.json());
    }
})
export const billSlice = createSlice({
    name:'bills',
    initialState:{
        bills:[],
        loading3:false,
        
    },
    extraReducers:{
        [getBill.pending]:(state,action)=>{
            state.loading3=true;
        },
        [getBill.fulfilled]:(state,action)=>{
            state.loading3=false;
            state.bills=action.payload.bills;
            state.count=action.payload.count
        },
        [getBill.rejected]:(state,action)=>{
            state.loading3=false;
        }
    }
})
export default billSlice.reducer