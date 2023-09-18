import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getTodo = createAsyncThunk('todos/getTodos', async () => {
    return fetch("https://students.trungthanhweb.com/api/todo?apitoken=" + localStorage.getItem('token'))
        .then((res) => res.json());
})
const initialState = {
    task: [],
}
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload.note);
            state.task.push(action.payload);
            var data = new URLSearchParams();
            data.append('apitoken', localStorage.getItem('token'));
            data.append('todo', action.payload.note);
            fetch('https://students.trungthanhweb.com/api/todo', {
                        method: "POST",
                        headers: {
                            "Content-Type": 'application/x-www-form-urlencoded'
                        },
                        body: data,
            });
        },
        editTask: (state, action) => {
            state.task.forEach(el => {
                if (el.id === action.payload.id) {
                    el.note = action.payload.todo;
                    el.status = false;
                    var data = new URLSearchParams();
                    data.append('apitoken', localStorage.getItem('token'));
                    data.append('todo', action.payload.todo);
                    data.append('id', action.payload.id);
                    fetch('https://students.trungthanhweb.com/api/updatetodo', {
                        method: "POST",
                        headers: {
                            "Content-Type": 'application/x-www-form-urlencoded'
                        },
                        body: data,
                    });
                }

            });
        },
        finishtask: (state, action) => {
            state.task.forEach(el => {
                if (el.id === action.payload) {
                    el.status = true
                    var data = new URLSearchParams();
                    data.append('id', action.payload);
                    data.append('apitoken', localStorage.getItem('token'));
                    fetch('https://students.trungthanhweb.com/api/statusTodo', {
                        method: "POST",
                        headers: {
                            "Content-Type": 'application/x-www-form-urlencoded'
                        },
                        body: data,
                    });
                }

            });
        },
        deleteTaskSlice: (state, action) => {
            console.log(action.payload);
            state.task = state.task.filter((ỉtem) => ỉtem.id !== action.payload);
            var data = new URLSearchParams();
            data.append('apitoken', localStorage.getItem('token'));
            data.append('id', action.payload);
            fetch('https://students.trungthanhweb.com/api/deletetodo', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
                body: data,
            });
        }

    },
    extraReducers: {
        [getTodo.pending]: (state, action) => {
            state.loading = true;
        },
        [getTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.task = action.payload.todo
        },
        [getTodo.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})
export const { addTask, editTask, finishtask, deleteTaskSlice } = taskSlice.actions;
export const selectTask = (state) => state.task;
export default taskSlice.reducer