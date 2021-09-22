import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map( (todo, i) => {
          return <TodoListItem todo={ todo } i={ i } />
        })
      }
    </ul>
  )
}
