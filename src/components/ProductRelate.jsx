import React from 'react'

function ProductRelate(props) {
  return (
    <div key={props.id}>
        <div className="card" style={{'paddingTop':'10px'}} >
            <img src={props.image} className="card-img-top" style={{'width':'70%','margin':'0px auto'}} alt="..."/>
            <div className="card-body" style={{'minHeight':'165px'}}>
                <h5 className="card-title" style={{'fontSize':'18px'}}>{props.name}</h5>
                <p className="card-text">
                    Giá :  {Intl.NumberFormat('en-US').format(props.price)}
                </p>
                <a  href={`/chitiet/${props.id}`} className="btn btn-primary">Xem thêm</a>
            </div>
            </div>
    </div>
  )
}

export default ProductRelate