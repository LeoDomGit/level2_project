import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { getCart, deleteItem } from "../redux/cartSlice";
import { getProducts } from "../redux/productsSlice";
import "../css/cart.css";
import Footer from "../components/Footer";
import Swal from 'sweetalert2'
function Cart() {
    const dispatch = useDispatch();
    const { carts, loading2 } = useSelector((state) => state.carts);
    const [cart, setcart] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneerr, setPhoneErr] = useState(1);
    const [phone, setPhone] = useState('');
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(4);
    const [bills, setBill] = useState([]);
    const validPhone = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
    const [idBill, setidBill] = useState(0);
    const [billdetail, setbillDetail] = useState([]);
    const [total, setTotal]= useState(0);
    const validate = (e) => {
        if (e.match(validPhone)) {
            setPhoneErr(0);
            setPhone(e)
        } else {
            setPhoneErr(1);
        }
    };
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
    const getBill = async () => {
        fetch('https://students.trungthanhweb.com/api/bills1?apitoken=' + localStorage.getItem('token') + '&limit=' + limit)
            .then((res) => res.json()).then((res) => {
                setCount(res.count)
                setBill(res.bills)

            })
    }
    const submitBill = async () => {
        if (name == '' || address == '' || phone == '') {
            Toast.fire({
                icon: 'error',
                title: 'Thiếu thông tin nhận hàng'
            })
        } else {
            var data = new URLSearchParams();
            var cart = JSON.parse(localStorage.getItem('cart'));
            data.append('apitoken', localStorage.getItem('token'));
            data.append('tenKH', name);
            data.append('phone', phone);
            data.append('address', phone);
            data.append('cart', JSON.stringify(cart));
            fetch('https://students.trungthanhweb.com/api/createBill', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data
            }).then((res) => res.json()).then((res) => {
                if (res.check == true) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Đặt hàng thành công'
                    }).then(() => {
                        localStorage.removeItem('cart')
                        window.location.replace('/products');
                    })
                } else {

                }
            })
        }
    }
    const getDetailBill = async (id) => {
        setidBill(id);  

        if (idBill != 0) {
            const response = await fetch('https://students.trungthanhweb.com/api/singlebill?apitoken=' + localStorage.getItem('token') + '&id=' + id)
                .then(res => res.json()).then((res) => {
                    if (res.check == true) {
                        
                        var sum=0;
                        setbillDetail(res.result);
                        res.result.forEach(el => {
                            sum+=(Number(el.price)*Number(el.qty));
                        });
                        setTotal(sum)
                    }
                })
        }
    }
    const updateLimit = ()=>{
        setLimit(limit+4);
        if(limit<count){
            getBill()            
        }
    }
    useEffect(() => {
        if (!localStorage.getItem('token') || localStorage.getItem('token') == null) {
            window.location.replace('/login');
        }
        getBill();
        dispatch(getCart())
        dispatch(getProducts())

    }, []);
    return (
        <div>
            <Navbar />
            <div className="container-fluid px-5">
                <div style={{'minHeight':'529px'}} className="row w-100 mt-4">
                    <div className="col-md-6">
                        {localStorage.getItem('cart') && carts.length > 0 && (

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
                    {!localStorage.getItem('cart') ||loading2 || cart.length != 0 ?
                        ''
                        :
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
                                    <input type="text" className={`form-control ${phoneerr == 1 ? 'border border-danger' : ''}`} onKeyUp={(e) => validate(e.target.value)} placeholder='Số điện thoại' />
                                </div>
                                <div className="col-md">
                                    <button className={`btn btn-primary mt-4`} onClick={submitBill}>Chốt đơn</button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
                <div className="container">
                    <div className="row">
                        {localStorage.getItem('cart') && carts.length == 0 && (

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
                                        <tr>
                                            <td scope="row" colSpan={7}><b>Chưa có giỏ hàng </b></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
                { carts.length == 0 &&
                    <div className="container-fluid px-5 mt-3">
                        <div className="row w-100">
                            <div className="col-md-4">
                                <ul className="list-group">
                                    {carts.length==0 &&bills.map((item, index) =>

                                        <li key={index} onClick={(e) => getDetailBill(item.id)} className={`pointer list-group-item bills ${item.id == idBill   ? 'active' : ''}`}>
                                            <h5>Tên khách hàng : {item.tenKH}</h5>
                                            <h5>Số điện thoại : {item.phone}</h5>
                                            <p>Địa chỉ : {item.address}</p>
                                        </li>
                                    )}


                                </ul>
                                {limit<count &&

                                <button className='btn btn-primary mt-2' onClick={updateLimit}>Xem thêm</button>

                                            }
                            </div>
                            {billdetail && billdetail.length > 0 &&
                                <div className="col-md">
                                    <div className="table-responsive">
                                        <table className="table table-light border">
                                            <thead>
                                                <tr>
                                                    <th scope="col border">#</th>
                                                    <th scope="col border">Hình ảnh</th>
                                                    <th scope="col border">Tên sản phẩm</th>
                                                    <th scope="col border">Số lượng</th>
                                                    <th scope="col border">Đơn giá</th>
                                                    <th scope="col border">Thành tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {billdetail.map((item,index)=>
                                                <tr key={index} className="">
                                                <td scope="row">{++index}</td>
                                                <td>
                                                    <img style={{'width':'100px'}} src={`https://students.trungthanhweb.com/images/${item.image}`} alt="" />
                                                </td>
                                                <td>{item.productname}</td>
                                                <td>{item.qty}</td>
                                                <td>{Intl.NumberFormat('en-US').format(Number(item.price))}</td>
                                                <td>{Intl.NumberFormat('en-US').format(Number(item.price)*Number(item.qty))}</td>

                                                </tr>
                                                    
                                                )
                                                }
                                                <tr>
                                                    <td colSpan={5}>Tổng cộng</td>
                                                    <td>{Intl.NumberFormat('en-US').format(total)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Cart