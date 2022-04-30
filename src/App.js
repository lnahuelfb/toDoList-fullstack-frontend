import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'

function App () {
  const date = new Date().toDateString()
  console.log(date)

  return (
    <div className='App'>
      <header>
        <h1>
          <a href='/'>
            To Do List ✅
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href='/'>
                Home
              </a>
            </li>
            <li>
              <a href='/create-ToDo'>
                Crea una nueva tarea!
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/create-ToDo' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
