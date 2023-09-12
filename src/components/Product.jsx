import React from 'react'
import Swal from 'sweetalert2'
function Product(props) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const addToCart = (id)=>{
      if(localStorage.getItem('cart') && localStorage.getItem('cart')!=null){
        var arr=JSON.parse(localStorage.getItem('cart'));
      }else{
        var arr=[];
      }
      var check=false;
      arr.forEach(el => {
        if(el[0]==id){
          el[1]++;
          check=true;
        }
      });
      if(check==false){
        arr.push([Number(id),1]);
      }
      localStorage.setItem('cart',JSON.stringify(arr));
      Toast.fire({
        icon: 'success',
        title: 'Đã thêm thành công'
      })
  }
  return (
    <div>
      <div className="row" >
        <div className="card" style={{ "width": "97%", "background": "white", "fontFamily": "Times New Roman", "boxShadow": "1px 1px 1px 2px grey" }}>
          <img src={props.image} style={{'width':'60%','height':'auto','margin':'0px auto'}} className="card-img-top pt-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>
            <p className="card-text text-center">
              {Intl.NumberFormat('en-US').format(props.price)}
            </p>
            <div className="row">
              <div className="col-md">
                <a href={`/chitiet/${props.id}`} className="btn btn-primary w-100">Xem thêm</a>
              </div>
              <div className="col-md">
                <a href="#" className="btn btn-warning w-100" onClick={()=>addToCart(props.id)}>Thêm </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product