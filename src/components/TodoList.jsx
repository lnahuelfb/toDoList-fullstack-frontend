import React, { useState, useEffect } from 'react'
import TodoCard from './TodoCard'
import styles from './styles/TodosList'

const TodoList = () => {
  const [Todos, setTodos] = useState([])
  const API = 'http://localhost:3001/todos'

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
  }, [])

  return (
    <>
      <h1 style={styles.title}>ToDo's</h1>
      <div style={styles.container}>
        {
        Todos
          ? Todos.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                id={todo.id}
                task={todo.task}
                description={todo.description}
                important={todo.important}
                complete={todo.complete}
              />
            )
          })
          : <h1>Loading</h1>
      }
      </div>
    </>
  )
}

export default TodoList
