import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos :[
    ],
}
export const taskSlice1 = createSlice({
    name : 'task1',
    initialState,
    reducers:{
        addTask : (state,action)=>{
            state.todos.push(action.payload);
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
    }
})
export const {addTask} = taskSlice1.actions;
export const selectTask = (state)=>state.todos;
export default taskSlice1.reducer