import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'
import { addTask, selectTask, editTask, finishtask, deleteTaskSlice,getTodo } from "../redux/todoSlice1";
import { useDispatch, useSelector } from 'react-redux';

function Todo2() {
    const [item,setItem]= useState('');
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const todos = useSelector((state) => state.task1);
    const [id, setID] = useState(0);

    const submitTodo1 = async (e) => {
        e.preventDefault();
        dispatch(editTask({
            id: id,
            todo: item
        }))
        Toast.fire({
            icon: 'success',
            title: 'Đã thay đổi thành công'
        })
        setItem('');
        setEdit(false);
    }
    const finishTask = (i) => {
        Swal.fire({
            icon: 'question',
            text: 'Hoàn thành task công việc ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Đúng',
            denyButtonText: `Sai`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(finishtask(i));
                Toast.fire({
                    icon: 'success',
                    title: 'Đã hoàn thành'
                })
            } else if (result.isDenied) {
                
            }
        })

    }
    const deleteTask = (i) => {
        Swal.fire({
            text: 'Xóa task ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Đúng',
            denyButtonText: `Không`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(deleteTaskSlice(i))
            } else if (result.isDenied) {
            }
        })
    }
    const editSetup = (i, e) => {
        setID(i);
        setItem(e);
        setEdit(true);
        // dispatch(editTask({
        //     id:i,
        //     todo:item
        // }))
    }
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
      const submitTodo = async (e) => {
        e.preventDefault();
        if (!item || item == '') {
            Toast.fire({
                icon: 'error',
                title: 'Chưa nhập todo'
            })
        } else {
            var item1 = new Object();
            item1.id = Date.now();
            item1.note = item;
            item1.status = false;
            dispatch(addTask(item1))
            setItem('');
            Toast.fire({
                icon: 'success',
                title: 'Đã thêm thành công'
            })
        }
    }
    const addTodo = ()=>{
        if(item!=''){
            const item1 = new Object();
            item1.id = Date.now();
            item1.note = item;
            item1.status=false;
            dispatch(addTask(item1));
            Toast.fire({
                icon: 'success',
                title: 'Đã thêm thành công'
            }).then(()=>{
                setItem('')
            })
        }
    }
    return (
        <div >
            <Navbar />
            <div className='container-xl'>
                <div className="row mt-4">
                    <div className="col-md-10">
                        <input type="text" className="form-control" value={item} onChange={(e)=> setItem(e.target.value)} placeholder='Todo'/>

                    </div>
                    <div className="col-md">    
                    {edit ?
                            <button className='btn btn-warning w-50' onClick={submitTodo1}>Sửa </button>

                            :
                            <button className='btn btn-primary w-50' onClick={submitTodo}>Thêm </button>

                        }
                    </div>
                </div>
                <div className="row mt-3">
                {todos && todos.todos.length > 0 &&
                    <div className="row mt-4">
                        <div className="table-responsive">
                            <table className="table table-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Todo</th>
                                        <th scope="col">Tình trạng</th>
                                        <th scope="col">Tùy chỉnh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.todos.map((item, index) =>
                                        <tr key={index} className="">
                                            <td scope="row">{++index}</td>
                                            <td>
                                                {
                                                    item.status == 1 ?
                                                        <p style={{ 'textDecorationLine': 'line-through' }}>
                                                            {item.note}
                                                        </p>

                                                        :
                                                        <b>
                                                            {item.note}
                                                        </b>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.status == false ?
                                                        <input type="checkbox" onChange={(e) => finishTask(item.id)} />
                                                        :
                                                        <input type="checkbox" checked disabled />

                                                }
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={(e) => deleteTask(item.id)}>Xóa</button>
                                                <button className='ms-3 btn btn-warning' onClick={(e) => editSetup(item.id, item.note)}>Sửa</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                }
                    
                </div>
            </div>
        </div>
    )
}

export default Todo2