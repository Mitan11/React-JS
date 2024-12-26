import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { addTask, deleteTask, toggleStatus, updateTask } from './taskSlice';

export const addTaskAsync = (task, dataCollection) => async (dispatch) => {
    if (task.trim() === "") {
        toast.error("Please enter text first");
        return;
    }
    try {
        const addedDate = new Date().toISOString();
        const docRef = await addDoc(dataCollection, {
            text: task,
            addedDate,
            status: false,
        });
        dispatch(addTask({ id: docRef.id, text: task, addedDate, status: false }));
        toast.success("Task Added");
    } catch (error) {
        console.log(error);

        toast.error("Failed to add task");
    }
};

export const deleteTaskAsync = (id, dataCollection) => async (dispatch) => {
    try {
        const docRef = doc(dataCollection, id);
        await deleteDoc(docRef);
        dispatch(deleteTask(id));
        toast.success("Task deleted");
    } catch (error) {
        console.log(error);
        toast.error("Failed to delete task");
    }
};

export const toggleStatusAsync = (id, status, dataCollection) => async (dispatch) => {
    try {
        const docRef = doc(dataCollection, id);
        await updateDoc(docRef, {
            status: !status
        });
        dispatch(toggleStatus(id));
        toast.success("Task status updated");
    } catch (error) {
        console.log(error);
        toast.error("Failed to update task status");
    }
};

export const updateTaskAsync = (id, newText, dataCollection) => async (dispatch) => {
    if (newText.trim() === "") {
        toast.error("Task cannot be empty");
        return;
    }

    try {
        const taskRef = doc(dataCollection, id);
        await updateDoc(taskRef, {
            text: newText,
            updatedDate: new Date().toISOString()
        });
        
        dispatch(updateTask({
            id,
            text: newText,
            updatedDate: new Date().toISOString()
        }));
        
        toast.success("Task updated successfully");
    } catch (error) {
        console.error("Error updating task:", error);
        toast.error("Failed to update task");
    }
};

