import React from 'react'
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'
import {  } from "../redux/todoSlice1";
function Todo2() {
    return (
        <div >
            <Navbar />
            <div className='container-xl'>
                <div className="row mt-4">
                    <div className="col-md-10">
                        <input type="text" className="form-control" placeholder='Todo'/>
                        
                    </div>
                    <div className="col-md">    
                        <button className='btn btn-primary w-100'>Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo2