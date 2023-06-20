import React from 'react'
import '../assets/css/TodoList.css'

function TodoList({todo, onToggleComplete, onDeleteTodo}) {

return (
    <li key={todo.id}>
        <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={onToggleComplete}
        />
        <span
            className={todo.isCompleted ? 'todo-completed' : ''}
        >
            {todo.item}
        </span>
        <button
            className='todo-btn'
            onClick={onDeleteTodo}
        >
            Delete
        </button>
    </li>
  )
}

export default TodoList