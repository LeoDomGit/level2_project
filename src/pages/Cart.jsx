import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { getCart } from "../redux/cartSlice";
// import { getCates } from "../redux/cateSlice";
function Cart() {
    const dispatch = useDispatch();
    const {carts,loading}= useSelector((state)=> state.carts);
    useEffect(()=>{
        dispatch(getCart())
      },[]);
    return (
        <div>
            <Navbar />
            <div className="container-fluid px-5">
                <div className="row w-100 mt-4">
                    {carts && carts.length > 0 && (
                        <div className="col-md-6">
                            <div className="table-responsive">
                                <table className="table table-secondary">
                                    <thead className='table-dark'>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Hình ảnh </th>
                                            <th scope="col">Tên sản phẩm</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Thành tiền</th>
                                            <th scope="col">Xóa</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map((item,index) =>
                                            <tr key={index} className="">
                                                <td scope="row">{++index}</td>
                                                <td><img style={{'width':'100px'}} src={item[3]}alt="" /></td>
                                                <td className='text-left align-middle'>{item[1]}</td>
                                                <td className='text-left align-middle'>{Intl.NumberFormat('en-US').format(item[5])}</td>
                                                <td className='text-left align-middle'>{item[4]}</td>
                                                <td className='text-left align-middle'>{Intl.NumberFormat('en-US').format(item[6])}</td>
                                                <td className='text-left align-middle'><button className='btn btn-danger btn-sm'>Xóa</button></td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Cart