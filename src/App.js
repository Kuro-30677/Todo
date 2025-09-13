import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  return (
    <div className="App" style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Todo List </h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
