import { createSlice } from "@reduxjs/toolkit";
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
            const {id,todo,status} = action.payload;
            state.task.forEach(el => {
                if(el.id===action.payload.id){
                        el.todo=action.payload.todo;
                        el.status=false
                }

            });
        }
    }
})
export const {addTask,editTask} = taskSlice.actions;
export const selectTask = (state)=>state.task;
export default taskSlice.reducer