import { useState } from 'react';
import { taskAPI } from '../services/api';

const TaskCard = ({ task, onTaskDeleted }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    try {
      await taskAPI.updateTask(task._id, { status: newStatus });
      window.location.reload(); // Refresh to show updated status
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.deleteTask(task._id);
        onTaskDeleted(task._id);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const priorityClass = task.priority.toLowerCase();
  const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date';

  return (
    <div className={`task-card priority-${priorityClass}`}>
      <div className="task-header">
        <h4>{task.title}</h4>
        <span className={`priority-badge priority-${priorityClass}`}>
          {task.priority}
        </span>
      </div>
      {task.description && <p className="task-description">{task.description}</p>}
      <div className="task-meta">
        <span className="due-date">📅 {dueDate}</span>
        {task.category && <span className="category">{task.category.name}</span>}
      </div>
      <div className="task-actions">
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          disabled={isUpdating}
          className="status-select"
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;