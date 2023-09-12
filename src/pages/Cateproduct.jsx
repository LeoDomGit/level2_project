import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';
import { getProducts,cateProducts } from "../redux/productsSlice";
function Cateproduct() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const {products,loadingP}= useSelector((state) => state.products);
    const product = products.filter((item)=>item.idCate === id);
    useEffect(()=>{
        dispatch(getProducts())
    },[])
  return (
    <>
    <Navbar/>
    <Carousel/>
    </>
  )
}

export default Cateproduct