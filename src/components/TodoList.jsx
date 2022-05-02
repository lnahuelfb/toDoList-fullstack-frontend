import React, { useState, useEffect } from 'react'
import TodoCard from './TodoCard'
import Form from './Form'
import './styles/TodosList.css'

const TodoList = () => {
  const [Todos, setTodos] = useState([])
  const API = 'https://todo-list-lnahuelfb.herokuapp.com/todos'

  const fetchData = async (API) => {
    try {
      const data = await fetch(API)
      const todos = await data.json()

      setTodos(todos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(API)
  }, [Todos])

  return (
    <div className='list-container'>
      <h1 className='title'>ToDo's</h1>
      <div className='containerCards'>
        {
        Todos.length > 0
          ? Todos.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                id={todo.id}
                task={todo.task}
                description={todo.description}
                important={todo.important}
                complete={todo.complete}
                date={todo.date}
              />
            )
          })
          : (
            <div className='notFound'>
              <h1>¡Aún no has creado ninguna tarea!</h1>
              <Form />
            </div>
            )
      }
      </div>
    </div>
  )
}

export default TodoList
