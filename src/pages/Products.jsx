import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Product from '../components/Product';
function Products(props) {


  return (
    <>
    <Navbar brands={props.brands} cates={props.cates}/>
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