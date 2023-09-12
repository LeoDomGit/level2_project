import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';
import Product from '../components/Product';

import { getProducts, cateProducts } from "../redux/productsSlice";
function Brandproduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, loadingP } = useSelector((state) => state.products);
  const product = products.filter((item) => item.idBrand === id);
  const [limit, setLimit] = useState(4);
  const image=`https://students.trungthanhweb.com/images/`;
  console.log(product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container-fluid mb-5">
        <div className="row w-100">
          <div className="col-md-3 border-end">
            <div className="container">
              <input type="text" className='form-control' placeholder='Tên sản phẩm' />
              <hr />
              <input type="number" placeholder='Số tiền' className="form-control" />
            </div>
          </div>
          <div className="col-md">
            <div className="row" style={{'width':"100%"}}>
              {products && product.length > 0 && product.slice(0,limit).map((item,index) =>
                <div className="col-md-3">
                  <Product image={image + item.images} id={item.id} name={item.name} price={item.price} />
                </div>
              )}

            </div>
            {limit<product.length &&
            <div className="row w-100 mt-3">
                <div className="col-md-2">
                  <button className='btn btn-primary' onClick={()=>setLimit(limit+4)}>Xem thêm</button>

                </div>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Brandproduct