import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';
import { getProducts, cateProducts } from "../redux/productsSlice";
function Cateproduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, loadingP } = useSelector((state) => state.products);
  const product = products.filter((item) => item.idCate === id);
  const [limit ,setLimit]= useState(4);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-md-2 border-end">
            <div className="container">
              <input type="text" className='form-control' placeholder='Tên sản phẩm' />
              <hr />
              <input type="number" placeholder='Số tiền' className="form-control" />
            </div>
          </div>
          <div className="col-md">
            <div className="row w-100 ">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cateproduct