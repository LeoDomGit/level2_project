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
    reducers:{
        cateProducts:(state,action)=>{
        //    console.log(state.products);
            console.log(state.products);
        // var result = state.products.filter((ỉtem)=>ỉtem.idCate === action.payload);
            // console.log(state.products);
            // state.products=
            // console.log(state.products);
        },
        brandProducts:(state,action)=>{
            state.products= state.products.filter((ỉtem)=>ỉtem.idBrand === action.payload);
            
        }
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
export const {cateProducts,brandProducts} = productsSlice.actions;
export default productsSlice.reducer