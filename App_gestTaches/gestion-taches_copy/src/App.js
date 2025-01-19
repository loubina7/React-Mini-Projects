import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };


  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
