import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseconfig';
import toast from 'react-hot-toast';

const initialState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleStatus: (state, action) => {
            state.tasks = state.tasks.map(task => 
                task.id === action.payload 
                    ? { ...task, status: !task.status }
                    : task
            );
        },
        updateTask: (state, action) => {
            state.tasks = state.tasks.map(task => 
                task.id === action.payload.id 
                    ? { ...task, text: action.payload.text }
                    : task
            );
        }
    },
});


export const fetchTasks = async (dispatch) => {
    try {
        const data = collection(db, "Todo's");
        const getTodos = await getDocs(data);
        const tasks = getTodos.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        dispatch(setTasks(tasks));
    } catch (error) {
        toast.error("Error fetching tasks:", error);
    }
};

export const { setTasks, addTask, deleteTask, toggleStatus, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
