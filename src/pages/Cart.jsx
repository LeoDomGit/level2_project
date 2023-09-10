import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { getCart, deleteItem } from "../redux/cartSlice";
import { getProducts } from "../redux/productsSlice";
import Swal from 'sweetalert2'
function Cart() {
    const dispatch = useDispatch();
    const { carts, loading } = useSelector((state) => state.carts);
    const [id, setID] = useState(21);
    const { products, loadingP } = useSelector((state) => state.products);
    // const [product,setProduct]= useState({});
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneerr, setPhoneErr] = useState(1);
    const [phone, setPhone] = useState('');
    const validPhone =/(0[3|5|7|8|9])+([0-9]{8})\b/g
    const validate = (e) => {
        if(e.match(validPhone)){
            setPhoneErr(0);
        }else{
            setPhoneErr(1);
        }
     };
     console.log(phoneerr);
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
    const deleteCart = (i) => {
        Swal.fire({
            icon: 'question',
            text: 'Bạn muốn xóa sản phẩm ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Đúng',
            denyButtonText: `Không`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(deleteItem(i));
            } else if (result.isDenied) {
            }
        })

    }
    const submitBill = () => {
        if (name == '' || address == '' || phone == '') {

            Toast.fire({
                icon: 'error',
                title: 'Thiếu thông tin nhận hàng'
            })
        }
    }
    useEffect(() => {
        dispatch(getCart())
        dispatch(getProducts())
    }, []);
    return (
        <div>
            <Navbar />
            <div className="container-fluid px-5">
                <div className="row w-100 mt-4">
                    <div className="col-md-6">
                        {carts && carts.length > 0 && (

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
                                        {carts.map((item, index) =>
                                            <tr key={index} className="">
                                                <td scope="row">{++index}</td>
                                                <td><a href={`/chitiet/${item[0]}`}><img style={{ 'width': '100px' }} src={item[3]} alt="" /></a></td>
                                                <td className='text-left align-middle'><a style={{ "textDecoration": "none" }} href={`/chitiet/${item[0]}`}>{item[1]}</a></td>
                                                <td className='text-left align-middle'>{Intl.NumberFormat('en-US').format(item[5])}</td>
                                                <td className='text-left align-middle'>{item[4]}</td>
                                                <td className='text-left align-middle'>{Intl.NumberFormat('en-US').format(item[6])}</td>
                                                <td className='text-left align-middle'><button className='btn btn-danger btn-sm' onClick={() => deleteCart(item[0])}>Xóa</button></td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    <div className="col-md p-3 border rounded" style={{ 'height': '160px', 'background': '#ebebeb' }}>
                        <div className="row" >
                            <div className="col-md">
                                <label htmlFor="">Tên người nhận</label>
                                <input type="text" className={`form-control ${name == '' ? 'border border-danger' : ''}`} onChange={(e) => setName(e.target.value)} placeholder='Tên người nhận' />
                            </div>
                            <div className="col-md ">
                                <label htmlFor="">Địa chỉ </label>
                                <input type="text" className={`form-control ${address == '' ? 'border border-danger' : ''}`} onChange={(e) => setAddress(e.target.value)} placeholder='Địa chỉ' />
                            </div>
                            <div className="col-md">
                                <label htmlFor="">Điện thoại</label>
                                <input type="text" className={`form-control ${phoneerr ==1 ? 'border border-danger' : ''}`} onKeyUp={(e) => validate(e.target.value)} placeholder='Số điện thoại' />
                            </div>
                            <div className="col-md">
                                <button className={`btn btn-primary mt-4`} onClick={submitBill}>Chốt đơn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart