import React, { useEffect, useState } from 'react';
import api from '../api';
import TaskForm from './TaskForm';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await api.get('/');
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleAddOrEdit = async (task) => {
    if (task._id) {
      await api.put(`/${task._id}`, task);
    } else {
      await api.post('/', task);
    }
    fetchTasks();
    setEditingTask(null);
  };

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <TaskForm onSubmit={handleAddOrEdit} selectedTask={editingTask} />
      {loading ? <p>Loading...</p> : (
        <table>
          <thead>
            <tr><th>Title</th><th>Status</th><th>Due Date</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.dueDate?.substring(0, 10)}</td>
                <td>
                  <button onClick={() => setEditingTask(task)}>Edit</button>
                  <button onClick={() => handleDelete(task._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
