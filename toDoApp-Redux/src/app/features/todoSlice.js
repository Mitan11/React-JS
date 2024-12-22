import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

let todoList = [];

const getData = () => {
    axios.get('http://localhost:3000/todos').then((response) => {
        console.log(response,"1");
        todoList = response.data;
    })
}

getData();

export const todoSlice = createSlice({
    name: 'todolist',
    initialState: {
        todolist: todoList || []
    },
    reducers: {
        addTask: (state, action) => {
            let newTask;
            if (action.payload.trim() !== "") {
                console.log(action.payload);
                // state.todoList.push({ id: Date.now(), text: newTask, completed: false });
                newTask = { id: Date.now(), text: newTask, completed: false };
            }

        },
    }
})

export const { addTask } = todoSlice.actions

export default todoSlice.reducer