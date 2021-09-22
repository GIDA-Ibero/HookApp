import React, { useReducer } from 'react'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initTodo = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initTodo);
  
  return (
    <div>
      <h1>Todo App ({ todos.length })</h1>
      <div className="row">
        <div className="col-7">
          <TodoList todos={ todos} />
        </div>

        <div className="col-5">
          Column 5
        </div>
      </div>
    </div>
  )
}
