import React from 'react'
import Todo from './Todo'
import Style from './todos.module.css'

function Todos(props) {
  return (
    <div className={Style.showTodos}>
        {
            props.todos.map((todo, id) =>
            <Todo key={todo.id} todo={todo.todo} id={todo.id}  removeTodo={props.removeTodo} />
            )
        }
    </div>
  )
}

export default Todos