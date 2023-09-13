import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { getProducts,getSingle } from "../redux/productsSlice";

function Product(props) {
  const dispatch = useDispatch();
  const [id,setID]= useState(0);
  const { products, loadingP,singleProduct } = useSelector((state) => state.products);

  const selectProduct= (e)=>{
    setID(e);
    const result = dispatch(getSingle(e));
    console.log(singleProduct);
  }
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const addToCart = (id) => {
    if (localStorage.getItem('cart') && localStorage.getItem('cart') != null) {
      var arr = JSON.parse(localStorage.getItem('cart'));
    } else {
      var arr = [];
    }
    var check = false;
    arr.forEach(el => {
      if (el[0] == id) {
        el[1]++;
        check = true;
      }
    });
    if (check == false) {
      arr.push([Number(id), 1]);
    }
    localStorage.setItem('cart', JSON.stringify(arr));
    Toast.fire({
      icon: 'success',
      title: 'Đã thêm thành công'
    })
  }
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <div>
      <div className="row" >
        <div className="card" style={{ "width": "97%", "background": "white", "fontFamily": "Times New Roman", "boxShadow": "1px 1px 1px 2px grey" }}>
        <div className="container mt-4">
              <div className="row">
                <div className="col-md-3">
                <span className="badge bg-danger">{props.catename}</span>
                </div>
                <div className="col-md-3">
                <span className="badge bg-warning">{props.brandname}</span>

                </div>
              </div>
            </div>
          <img onClick={(e)=>selectProduct(props.id)} src={props.image} style={{ 'width': '60%', 'height': 'auto', 'margin': '0px auto' }} className="card-img-top pt-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>
            <p className="card-text text-center">
              {Intl.NumberFormat('en-US').format(props.price)}
            </p>

            <div className="row">
              <div className="col-md">
                <a href={`/chitiet/${props.id}`} className="btn btn-primary w-100">Xem thêm</a>
              </div>
              <div className="col-md">
                <a href="#" className="btn btn-warning w-100" onClick={() => addToCart(props.id)}>Thêm </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product