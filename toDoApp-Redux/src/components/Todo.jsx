import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  clearAll,
  deleteTask,
  updateTask,
} from "../app/features/todoSlice";
import { FaPen, FaTrashAlt } from "react-icons/fa";

function Todo() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todolist.todolist);
  console.log(todo);

  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const addNewTask = () => {
    const task = newTask.trim();
    if (task !== "") {
      dispatch(addTask(task));
      setNewTask("");
    } else {
      setError("Field is empty");
    }
  };

  function edit(index) {}

  const handletask = (e) => {
    setNewTask(e.target.value);
    if (e.target.value !== "") {
      setError("");
    }
  };

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
            onClick={addNewTask}
            disabled={newTask.length === 0}
            className="bg-indigo-600 text-white px-6 py-3 rounded-r-md hover:bg-indigo-700"
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
        <span className="text-red-600">{error}</span>

        <ul id="taskList" className="space-y-4 mt-6">
          {/* Sample Task */}
          {todo.map((t, i) => (
            <li
              key={t.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
            >
              <span className="text-gray-700">{t.title}</span>
              <div className="flex gap-4">
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => edit(i)}
                >
                  <FaPen />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => dispatch(deleteTask(t.id))}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
          {/* Repeat Task Item */}
        </ul>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-600">
            You have{" "}
            <span id="taskCount" className="font-bold">
              {todo.length}
            </span>{" "}
            tasks
          </p>
          <button
            id="clearTasksBtn"
            className="text-sm text-gray-500 hover:text-gray-700"
            onClick={() => {
              dispatch(clearAll());
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
