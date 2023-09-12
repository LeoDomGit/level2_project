import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Product from '../components/Product';
import Carousel from '../components/Carousel';
import Vouchers from '../components/Vouchers';
import Footer from "../components/Footer";
import "../css/products.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [count, setCount] = useState(0);
  const image = `https://students.trungthanhweb.com/images/`;
  const apitoken = localStorage.getItem('token');
  const getValue = async () => {
    fetch(`https://students.trungthanhweb.com/api/home1?apitoken=${apitoken}&limit=${limit}`)
      .then((res) => res.json()).then((result) => {
        if (result.products.length > 0) {
          setProducts(result.products);
          setCount(result.count);
        }
      })


  }
  const loadMore= ()=>{
    setLimit(limit+4);
  }
  useEffect(() => {
    getValue();
  }, [limit])
  return (
    <>
      <Navbar />
      <Carousel/>
      <Vouchers/>
      <div className='containerProduct'>
        {products && products.length > 0 &&
          <div className="row mt-4">
            {products.slice(0,limit).map((item,index) =>
              <div className="col-md-3 mb-3" key={index}>
                <Product image={image + item.images} id={item.id} name={item.name} price={item.price} />
              </div>
            )}

          </div>

        }
          <div className="row mt-3 text-center">
            <div className="col-md-10">

            </div>
            {/* <div className="col-md">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {pages}
                </ul>
              </nav>
            </div> */}
            {limit<=count ?
                        <div className="row text-center">
                          <div style={{'margin':'0px auto'}} className="col-md-3 text-center">
                          <button className='btn btn-primary w-100' onClick={loadMore}>Xem thêm</button>
                          </div>
                      </div>
            :
            ''
            }

          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Products