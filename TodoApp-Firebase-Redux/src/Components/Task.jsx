import { collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebaseconfig";
import { deleteTaskAsync, toggleStatusAsync, updateTaskAsync } from "../app/taskActions";
import { useDispatch } from "react-redux";

function Task({ task }) {
  const dispatch = useDispatch();
  const data = collection(db, "Todo's");
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {/* Task Content */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-gray-800">{task.text}</h3>
        <span
          className={`px-3 py-1 text-xs font-medium ${
            task.status
              ? "text-green-700 bg-green-100"
              : "text-red-700 bg-red-100"
          } rounded-full`}
        >
          {task.status ? "Completed" : "Pending"}
        </span>
      </div>

      {/* Date */}
      <div className="text-sm text-gray-500 mb-4">
        Added: {new Date(task.addedDate).toLocaleDateString()}
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end mt-2">
        <button
          className={`p-2 rounded-full ${
            task.status
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-green-600 hover:text-green-700 hover:bg-green-50"
          }`}
          title={task.status ? "Completed" : "Complete"}
          onClick={() =>
            dispatch(toggleStatusAsync(task.id, task.status, data))
          }
          disabled={task.status}
        >
          {task.status ? (
            // Double tick icon for completed tasks
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 12l5 5 5-5M12 12l5 5 5-5" />
            </svg>
          ) : (
            // Single tick icon for pending tasks
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        <button
          className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full"
          title="Edit"
          onClick={() => setIsEditing(true)}
          disabled={task.status}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>

        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-96">
              <h3 className="text-lg font-medium mb-4">Edit Task</h3>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full border rounded p-2 mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    dispatch(updateTaskAsync(task.id, editText, data));
                    setIsEditing(false);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditText(task.text);
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full"
          title="Delete"
          onClick={() => dispatch(deleteTaskAsync(task.id, data))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Task;
