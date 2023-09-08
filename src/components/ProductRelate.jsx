import React from 'react'

function ProductRelate(props) {
  return (
    <div >
        <div class="card" style={{'paddingTop':'10px'}} >
            <img src={props.image} class="card-img-top" style={{'width':'70%','margin':'0px auto'}} alt="..."/>
            <div class="card-body" style={{'minHeight':'165px'}}>
                <h5 class="card-title" style={{'fontSize':'18px'}}>{props.name}</h5>
                <p class="card-text">
                    Giá :  {Intl.NumberFormat('en-US').format(props.price)}
                </p>
                <a  href={`/chitiet/${props.id}`} class="btn btn-primary">Xem thêm</a>
            </div>
            </div>
    </div>
  )
}

export default ProductRelate