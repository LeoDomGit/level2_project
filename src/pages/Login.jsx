import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import "../css/login.css";
function Login() {

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
    const [email, setEmail] = useState('');
    var data = new URLSearchParams();
    data.append('email',email);
    const checkLogin = async (e) => {
        e.preventDefault();
        // Promise 
        if(!email ||email===''||email==undefined){
          Toast.fire({
            icon: 'error',
            title: 'Chưa nhập email'
          })
        }else{
          const response = await fetch('https://students.trungthanhweb.com/api/checkLoginhtml', {
            method:"POST",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        });
        const result = await response.json();
        localStorage.setItem('token',result.apitoken);
        Toast.fire({
            icon: 'success',
            title: 'Đăng nhập thành công'
          }).then(()=>{
            // window.location.replace('/products');
          })
        }


      }
      const checkLogin1 = ()=>{
          var data = new URLSearchParams();
          data.append('email','leodomsolar@gmail.com');
          fetch('https://students.trungthanhweb.com/api/checkLoginhtml', {
            method:"POST",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }).then((res)=>res.json()).then((res)=>{
          if(res.check==true){
              localStorage.setItem('token',res.apitoken);
              window.location.replace('/products');
          }
        })
        // }
      }
      useEffect(()=>{
        checkLogin1();
      },[])
    return (
        <div className="wrapper">
          {/* <div className='container1 p-2'>
              <div className="row maincontainer">
                  <div className="col-md-3">
                      <img className='w-100' src="https://i.pinimg.com/1200x/0b/72/66/0b7266f3138683332e26264e04bd0063.jpg" alt="" />
                  </div>
                  <div className="col-md  mt-5">
                      <div style={{'padding-top':'15%'}} className="input-group mb-3 w-100">
                          <input type="text" className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
                          <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={checkLogin}>Button</button>
                      </div>
                  </div>
              </div>
          </div> */}
        </div>
        
    )
}

export default Login