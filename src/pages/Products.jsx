import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Product from '../components/Product';
import "../css/products.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalpage] = useState(0);
  const image = `https://students.trungthanhweb.com/images/`;
  const apitoken = localStorage.getItem('token');
  const getValue = async () => {
    fetch(`https://students.trungthanhweb.com/api/home?apitoken=${apitoken}&&page=${page}`)
      .then((res) => res.json()).then((result) => {
        if (result.products.data.length > 0) {
          setProducts(result.products.data);
          setTotalpage(result.products.last_page);
        }
      })


  }
  useEffect(() => {
    getValue();
  }, [page])
  let pages =[];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(<li className="page-item" key={i} onClick={()=>{setPage(i)}}><a className="page-link" href="#">{i}</a></li>)
  }
  return (
    <>
      <Navbar />
      <div className='containerProduct'>
        {products && products.length > 0 &&
          <div className="row mt-4">
            {products.map((item,index) =>
              <div className="col-md-3" key={index}>
                <Product image={image + item.images} name={item.name} price="18000000" />
              </div>
            )}

          </div>

        }
          <div className="row mt-3 text-center">
            <div className="col-md-10">

            </div>
            <div className="col-md">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {pages}
                </ul>
              </nav>
            </div>
          </div>
      </div>
    </>
  )
}

export default Products