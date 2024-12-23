import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todolist',
  initialState: {
    todolist: JSON.parse(localStorage.getItem('todo')) || [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: Date.now(), title: action.payload, completed: false };
      state.todolist = [newTask, ...state.todolist];
      localStorage.setItem('todo', JSON.stringify(state.todolist));
    },
    deleteTask: (state, action) => {
      if (window.confirm("Are you sure you want to delete this task?")) {
        const updatedTasks = state.todolist.filter(
          (task, i) => task.id !== action.payload
        );
        state.todolist = updatedTasks;
        localStorage.setItem("todo", JSON.stringify(updatedTasks));
      }
    },
    updateTask: (state, action) => {
      const updatedTasks = state.todolist.filter((task, i) => i !== action.payload);
      console.log(updatedTasks);
      state.todolist = updatedTasks;
    },
    clearAll: (state) => {
      if (window.confirm("Are you sure you want to clear all tasks?")) {
        localStorage.clear();
        state.todolist = [];
      }
    },
    toggleTaskCompletion: (state, action) => {
      const updatedTasks = state.todolist.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      state.todolist = updatedTasks;
      localStorage.setItem("todo", JSON.stringify(updatedTasks));
    },
  },
});

export const { addTask, deleteTask, updateTask, clearAll, toggleTaskCompletion } = todoSlice.actions;

export default todoSlice.reducer;
