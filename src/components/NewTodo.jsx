import React, { useState } from 'react'
import Style from './newtodo.module.css'

function NewTodo(props) {
    const [todo, setTodo] = useState({
        title: " ", desc: " ",
    })

const handleTodo =(event) =>{
    setTodo({...todo,[event.target.name]:event.target.value})
}
const handleSubmit =(event) => {
    event.preventDefault();
    props.onAddTodo(todo)
    setTodo({title: " ", desc: " "})
}
    

  return (
    <div className={Style.formControl}>
        <form action="" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="">Title</label>
            <input type="text" name="title" value={todo.title} onChange={handleTodo} />
            </div>
            <div>
            <label htmlFor="">Description</label>
            <input type="text" name="desc" value={todo.desc} onChange={handleTodo} />
            </div>
            <div>
            <button type="submit">Add Todo</button>
            </div>
        </form>
    </div>
  )
}

export default NewTodo