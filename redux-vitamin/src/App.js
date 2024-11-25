import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;