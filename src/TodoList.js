import React from 'react';
import './TodoList.css'; 

function TodoList({ tasks, onDeleteTask }) {
  return (
    <div>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-button" onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
    </div>
  );
}

export default TodoList;
