import React from 'react'

function ProductRelate(props) {
  return (
    <div>
        <div class="card" style="width: 18rem;">
            <img src={props.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">
                    Giá : {props.price}
                </p>
                <a href="#" class="btn btn-primary">Xem thêm</a>
            </div>
            </div>
    </div>
  )
}

export default ProductRelate