import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../redux/brandSlice";
import { getCates } from "../redux/cateSlice";

function Navbar(props) {
  if(!localStorage.getItem('token')||localStorage.getItem('token')==null){
    window.location.replace('/');
  }
  const dispatch = useDispatch();
  const {brands,loading1}= useSelector((state)=>state.brand);
  const {cates,loading}= useSelector((state)=> state.cate);
  useEffect(()=>{
    dispatch(getBrand());
    dispatch(getCates());
  },[]);
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href={"#"}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={"/products"}>Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/todo'}>Todo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/todo1'}>Todo2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/todo2'}>Todo3</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href={"#"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Thương hiệu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {brands && brands.map((item,index)=>
            <li key={index}><a className="dropdown-item" href={"#"}>{item.name}</a></li>
            
            )}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href={"#"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Loại sản phẩm
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {cates && cates.map((item,index)=>
            <li key={index}><a className="dropdown-item" href={"#"}>{item.name}</a></li>
            
            )}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/logout'}>Logout</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar