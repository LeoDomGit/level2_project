import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Product from '../components/Product';
function Products() {
  // const [cates,setCate]= useState([]);
  // const [brands,setBrand]= useState([]);

  // const getValue = async ()=>{
  //   const result = await fetch('https://students.trungthanhweb.com/api/home?apitoken='+localStorage.getItem('token'))
  //   .then((res)=>res.json());
  //   if(result.categrories){
  //   setCate(result.categrories);
  //   }
  //   if(result.brands){
  //     setBrand(result.brands);
  //   }

  // }
  // useEffect(()=>{
  //   if(localStorage.getItem('token')&& localStorage.getItem("token")!=null){
  //     getValue();
  //   }
  // },[])

  return (
    <>
    <Navbar/>
    <div className='container'>

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