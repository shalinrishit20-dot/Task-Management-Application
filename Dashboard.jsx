import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { taskAPI, categoryAPI } from '../services/api';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchTasks();
      fetchCategories();
    }
  }, [isAuthenticated, navigate]);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await taskAPI.getTasks();
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await categoryAPI.getCategories();
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleTaskAdded = () => {
    fetchTasks();
  };

  const handleTaskDeleted = (taskId) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  const filteredTasks = filter === 'All' 
    ? tasks 
    : tasks.filter(task => task.status === filter);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <TaskForm onTaskAdded={handleTaskAdded} categories={categories} />
        </div>
        <div className="dashboard-main">
          <h2>My Tasks</h2>
          <div className="filter-buttons">
            {['All', 'Todo', 'In Progress', 'Completed'].map(status => (
              <button
                key={status}
                className={`filter-btn ${filter === status ? 'active' : ''}`}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
          {loading ? (
            <p>Loading tasks...</p>
          ) : (
            <TaskList tasks={filteredTasks} onTaskDeleted={handleTaskDeleted} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;