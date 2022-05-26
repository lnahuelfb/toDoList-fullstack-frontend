import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Form from './components/Form.jsx'
import TodoList from './components/TodoList.jsx'

import './App.css'

function App () {
  const date = new Date().toDateString()

  return (
    <div className='App'>
      <header>
        <h1 className='logo'>
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
                Nueva tarea
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/create-ToDo' element={<Form />} />
      </Routes>
      <footer>
        <h1>
          <a href='https://nahuelfb.vercel.app/'>
            Nahuel Beschtedt
          </a>
        </h1>
        <nav>
          <ul>
            <li><a href='https://github.com/lnahuelfb'>GitHub</a></li>
            <li><a href='https://www.linkedin.com/in/nahuel-fernandez-beschtedt/'>Linkedin</a></li>
            <li><a href='https://api.whatsapp.com/send?phone=541163783961'>WhatsApp</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App
