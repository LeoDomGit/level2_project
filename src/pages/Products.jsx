import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Product from '../components/Product';
import "../css/products.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [nextLink, setnextLink] = useState('https://students.trungthanhweb.com/api/home');
  const image = `https://students.trungthanhweb.com/images/`;

  const getValue = () => {
     fetch(nextLink + '?apitoken=' + localStorage.getItem('token'))
      .then((res) => res.json()).then((result)=>{
        if (result.products.data.length > 0) {
          setProducts(result.products.data);
          if (result.products.next_page_url == null) {
            setnextLink(result.products.first_page_url);
          } else {
            setnextLink(result.products.next_page_url);
          }
        }
      })
    

  }
  const loadMore = ()=>{
    getValue();
  }
  useEffect(() => {
    getValue();
  }, [])

  return (
    <>
      <Navbar />
      <div className='containerProduct'>
        {products && products.length > 0 &&
          <div className="row mt-4">
            {products.map((item) =>
              <div className="col-md-3">
                <Product image={image + item.images} name={item.name} price="18000000" />
              </div>
            )}

          </div>

        }
        <div className="row mt-3 text-center">
          <div className="col-md">
            <button class="btn btn-primary" onClick={loadMore}>Xem thêm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products