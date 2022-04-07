import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Style from './home.module.css'
import NewTodo from './NewTodo'
import Todos from './Todos'


// const dummyTodos = [
//     {
//         id: 1,
//         title: "Wake up",
//         desc: "Wake up at 5 a.m"
//     },
//     {
//         id: 2,
//         title: "Sleep",
//         desc: "Sleep at 11 p.m"
//     },
// ]



function Home() {
  const [todos, setTodos] = useState([])

  const handleTodo = (todo) => {
    setTodos((prevTodos) =>{
      return  [...prevTodos , {id: uuidv4(), todo} ]
     
    })
  }
  const removeTodo = (id) => {
    setTodos((prevTodos)=>{
      const filteredTodos = todos.filter((todo)  =>todo.id !== id);
      return filteredTodos;
    })
  }
  return (
    <div className={Style.container}>
      <h1>Todo App</h1>
      <NewTodo  onAddTodo={handleTodo} />
        <Todos todos={todos} removeTodo={removeTodo} />
    </div>
  )
}

export default Home