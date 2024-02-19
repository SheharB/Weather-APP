import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar'; 
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './Animation.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTasks([]);
    }, 1000);
  }, []);

  const handleAddTask = (newTask) => {
    const currentDate = new Date(); 
    const formattedDateTime = `${currentDate.toLocaleString()}`; 
    const taskWithDateTime = `${newTask} - ${formattedDateTime}`; 
    setTasks([...tasks, taskWithDateTime]); 
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((_, index) => index !== taskId));
  };

  return (
    <div className="App">
      <Navbar /> 
      <div className="container">
        <h1></h1>
        <AddTodo onAddTask={handleAddTask} />
        <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
