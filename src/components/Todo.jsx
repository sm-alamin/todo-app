import React from 'react'
import Style from './todo.module.css'

function Todo(props) {
  const {title, desc} = props.todo
  const {id} =props

  const handleDelete =(id) => {
  props.removeTodo(id)
  }
  return (
    <article className={Style.article}>

      <h3>{title}</h3>
      <p>{desc}</p>
      <button className={Style.buttonDelete} onClick={ ()=>{
        handleDelete(id)
      }} >delete</button>
      <hr/>
    </article>
  )
}

export default Todo