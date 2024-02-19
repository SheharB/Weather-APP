import React, { useState } from 'react';
import './AddTodo.css'; 

function AddTodo({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask(task);
    setTask('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        className="add-todo-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button className="add-todo-button" type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
