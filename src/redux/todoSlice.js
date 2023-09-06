import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getTodo = createAsyncThunk('todos/getTodos' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/todo?apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})
const initialState={
    task :[],
}
export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask : (state,action)=>{
            console.log(action.payload);
            state.task.push(action.payload);
        },
        editTask: (state,action)=>{
            state.task.forEach(el => {
                if(el.id===action.payload.id){
                        el.note=action.payload.todo;
                        el.status=false
                }

            });
        },
        finishtask : (state,action)=>{
            state.task.forEach(el => {
                if(el.id===action.payload){
                        el.status=true
                    console.log(state.task);
                }

            });
        },
        deleteTaskSlice : (state,action)=>{
            console.log(action.payload);
            state.task= state.task.filter((ỉtem)=>ỉtem.id !== action.payload);
        }

    },
    extraReducers:{
        [getTodo.pending]: (state,action)=>{
            state.loading=true;
        },
        [getTodo.fulfilled]:(state,action)=>{
            state.loading=false;
            state.task= action.payload.todo
        },
        [getTodo.rejected]:(state,action)=>{
            state.loading=false;
        }
    }
})
export const {addTask,editTask,finishtask,deleteTaskSlice} = taskSlice.actions;
export const selectTask = (state)=>state.task;
export default taskSlice.reducer