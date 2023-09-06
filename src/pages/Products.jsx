import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Product from '../components/Product';
import "../css/products.css";
function Products() {
  const [products,setProducts]= useState([]);

  const getValue = async ()=>{
    const result = await fetch('https://students.trungthanhweb.com/api/home?apitoken='+localStorage.getItem('token'))
    .then((res)=>res.json());
    if(result.products.length>0){
      console.log(result.products);
    }

  }
  useEffect(()=>{
    if(localStorage.getItem('token')&& localStorage.getItem("token")!=null){
      getValue();
    }
  },[])

  return (
    <>
    <Navbar/>
    <div className='containerProduct'>

      <div className="row mt-4">
          <div className="col-md-3">
          <Product name="IPhone X" price="18000000"/>
          </div>
          <div className="col-md-3">
          <Product name="IPhone 11" price="19000000"/>
          </div>
          <div className="col-md-3">
          <Product name="IPhone 12" price="20000000"/>
          </div>
          <div className="col-md-3">
          <Product name="IPhone XS" price="14000000"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products