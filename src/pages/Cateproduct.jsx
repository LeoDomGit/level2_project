import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import Navbar from "../components/Navbar";
import { getProducts } from "../redux/productsSlice";
function Cateproduct() {
    const dispatch = useDispatch();
    const {products,loadingP}= useSelector((state) => state.products);
    console.log(products);
    
    useEffect(()=>{
        dispatch(getProducts())
    },[])
  return (
    <>
    <Navbar/>
    </>
  )
}

export default Cateproduct