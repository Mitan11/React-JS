import React, { useState, useEffect } from "react";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
    setTasks(storedTasks);
  }, []);

  function localStorageHandler(updatedTasks) {
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }

  function addTask() {
    if (newTask.trim() !== "") {
      let updatedTasks;
      if (isEditing) {
        updatedTasks = tasks.map((task, index) =>
          index === editIndex ? newTask : task
        );
        setIsEditing(false);
        setEditIndex(null);
      } else {
        updatedTasks = [...tasks, newTask];
      }
      setTasks(updatedTasks);
      console.log(updatedTasks);
      localStorageHandler(updatedTasks);
      setNewTask("");
    } else {
      setError("Field is empty");
    }
  }

  function edit(index) {
    setNewTask(tasks[index]);
    setIsEditing(true);
    setEditIndex(index);
  }

  function deleteTask(index) {
    if (window.confirm("Are you sure you want to Delete task?")) {
      console.log(index);
      const updatedTasks = tasks.filter((t, i) => i !== index);
      setTasks(updatedTasks);
      localStorageHandler(updatedTasks);
      console.log(updatedTasks);
    }
  }

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
            onClick={addTask}
            // disabled = {newTask.length === 0}
            className="bg-indigo-600 text-white px-6 py-3 rounded-r-md hover:bg-indigo-700"
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
        <span className="text-red-600">{error}</span>

        {/* Task List */}
        <ul id="taskList" className="space-y-4 mt-6">
          {/* Sample Task */}
          {tasks.map((t, i) => (
            <li
              key={i}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
            >
              <span className="text-gray-700">{t}</span>
              <div className="flex gap-4">
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => edit(i)}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => deleteTask(i)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
          {/* Repeat Task Item */}
        </ul>
        {/* Footer */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-600">
            You have{" "}
            <span id="taskCount" className="font-bold">
              {tasks.length}
            </span>{" "}
            tasks
          </p>
          <button
            id="clearTasksBtn"
            className="text-sm text-gray-500 hover:text-gray-700"
            onClick={() => {
              if (window.confirm("Are you sure you want to clear all tasks?")) {
                localStorage.clear();
                setTasks([]);
                setError("");
              }
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
