const TaskSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow animate-pulse">
      {/* Task Content */}
      <div className="flex items-center justify-between mb-4">
        {/* Task Text */}
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 justify-end mt-2">
        {/* Complete Button */}
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        {/* Edit Button */}
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        {/* Delete Button */}
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default TaskSkeleton; 