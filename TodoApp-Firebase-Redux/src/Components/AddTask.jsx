import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../config/firebaseconfig";
import { collection } from "firebase/firestore";
import { addTaskAsync } from "../app/taskActions";

function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const data = collection(db, "Todo's");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTaskAsync(task , data));
      setTask("");
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Add New Task</h2>
        <p className="text-sm text-gray-600 mt-1">
          Enter your task details below
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          placeholder="Type your task here..."
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
