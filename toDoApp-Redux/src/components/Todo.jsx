import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../app/features/todoSlice';

function Todo() {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todolist.todolist)

    const [newTask, setNewTask] = useState("");
    const [error, setError] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    function handletask(e) {
        setNewTask(e.target.value);
        if (e.target.value !== "") {
            setError("");
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-800 p-8">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Todo List
                </h1>
                {/* Add Task Input */}
                <div className="flex items-center mb-0">
                    <input
                        value={newTask}
                        onChange={handletask}
                        id="taskInput"
                        type="text"
                        autoFocus={true}
                        placeholder="What needs to be done?"
                        className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                        id="addTaskBtn"
                        onClick={() => {
                            dispatch(addTask(newTask));
                            setNewTask("");
                        }}
                        disabled={newTask.length === 0}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-r-md hover:bg-indigo-700"
                    >
                        {isEditing ? "Update" : "Add"}
                    </button>
                </div>
                <span className="text-red-600">{error}</span>
            </div>
        </div>
    )
}

export default Todo