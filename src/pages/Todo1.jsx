import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { addTask,selectTask,editTask,finishtask,deleteTaskSlice } from "../redux/todoSlice";

function Todo1() {
    const dispatch = useDispatch();
    const [item, setItem] = useState('');
    const [edit,setEdit] = useState(false);
    const [id,setID]= useState(0);
    const todos = useSelector((state)=>state.task);
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
    const submitTodo1= async (e) =>{
        e.preventDefault();
        dispatch(editTask({
            id:id,
            todo:item
        }))
        Toast.fire({
            icon: 'success',
            title: 'Đã thay đổi thành công'
          })
    }
    const finishTask = (i)=>{
        Swal.fire({
            icon:'question',
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
    const deleteTask = (i)=>{
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
    const editSetup = (i,e)=>{
        setID(i);
        setItem(e);
        setEdit(true);
        // dispatch(editTask({
        //     id:i,
        //     todo:item
        // }))
    }
    const submitTodo = async (e) => {
        e.preventDefault();
        if(!item||item===''){
            Toast.fire({
                icon: 'error',
                title: 'Chưa nhập todo'
            })
        }else{
            var item1 = new Object();
            item1.id= Date.now();
            item1.todo= item;
            item1.status=false;
            dispatch(addTask(item1))
            setItem('');
        }
    }
    useEffect(()=>{
        
    },[])
  return (
    <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-9">
                        <input type="text" className='form-control' value={item} onChange={e => setItem(e.target.value)} placeholder='Todo' />
                    </div>
                    <div className="col-md">
                        {edit ? 
                        <button className='btn btn-warning w-50' onClick={submitTodo1}>Sửa </button>

                        :
                        <button className='btn btn-primary w-50' onClick={submitTodo}>Thêm </button>

                        }
                    </div>
                </div>
                {todos && todos.task.length>0 &&
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
                                {todos.task.map((item,index)=>
                                <tr  key={index} className="">
                                <td scope="row">{++index}</td>
                                <td>{item.todo}</td>
                                <td>
                                    {
                                        item.status==false ? 
                                         <input type="checkbox"  onChange={(e)=>finishTask(item.id)} />
                                        :
                                        <input type="checkbox" checked disabled/>

                                    }
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={(e)=>deleteTask(item.id)}>Xóa</button>
                                    <button className='ms-3 btn btn-warning' onClick={(e)=>editSetup(item.id,item.todo)}>Sửa</button>
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
  )
}

export default Todo1