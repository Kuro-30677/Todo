import React from 'react';
import { useTodoStore } from '../store/todoStore';

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{todo.text}</span>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
