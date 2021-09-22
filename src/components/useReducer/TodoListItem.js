import React from 'react'

export const TodoListItem = ({ todo, i }) => {
  return (
    <li className="list-group-item">
      <p>
        {i + 1}, { todo.desc }
      </p>
      <button
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  )
}
