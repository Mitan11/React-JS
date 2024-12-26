import React, { useEffect } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../app/taskSlice";

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    fetchTasks(dispatch);
  }, [dispatch]);

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Task List</h2>
        <p className="text-sm text-gray-600 mt-1">
          Manage and track your tasks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
