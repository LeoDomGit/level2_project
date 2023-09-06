import React from 'react'

function Product(props) {
  return (
    <div>
      <div className="row" >
        <div className="card" style={{ "width": "97%", "background": "white", "fontFamily": "Times New Roman", "boxShadow": "2px 2px 2px 2px grey" }}>
          <img src="https://shopdunk.com/images/thumbs/0009181_iphone-14-128gb_240.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>
            <p className="card-text text-center">
              {props.price}
            </p>
            <div className="row">
              <div className="col-md">
                <a href="#" className="btn btn-primary w-100">Xem thêm</a>
              </div>
              <div className="col-md">
                <a href="#" className="btn btn-primary w-100">Xem thêm</a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product