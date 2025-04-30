import React, { useState, useEffect } from 'react';

export default function TaskForm({ onSubmit, selectedTask }) {
  const [task, setTask] = useState({ title: '', description: '', status: 'pending', dueDate: '' });

  useEffect(() => {
    if (selectedTask) setTask(selectedTask);
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: '', description: '', status: 'pending', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={task.description} onChange={handleChange} placeholder="Description" />
      <select name="status" value={task.status} onChange={handleChange}>
        <option>pending</option>
        <option>in progress</option>
        <option>completed</option>
      </select>
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}
