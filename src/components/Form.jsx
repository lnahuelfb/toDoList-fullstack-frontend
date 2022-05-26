import React, { useState } from 'react'
import './styles/Form.css'

const Form = () => {
  const [input, setInput] = useState({
    task: '',
    description: '',
    important: false,
    complete: false
  })

  const API = 'https://todo-list-lnahuelfb.herokuapp.com/todos'
  // const API = 'http://localhost:3001/todos'

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
      .then(window.alert('Tarea agregada con exito!'))
  }

  return (
    <div className='form-container'>
      <h2>¡Crea una nueva tarea!</h2>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='task'>Tarea</label>
        <input
          type='text'
          name='task'
          id='task'
          className='input'
          value={input.task}
          onChange={handleChange}
          required
        />
        <label htmlFor='description'>Descripcion</label>
        <input
          type='text'
          name='description'
          id='description'
          className='input'
          value={input.description}
          onChange={handleChange}
          required
        />
        <div className='check'>
          <label htmlFor='important'>Importante</label>
          <input
            type='checkbox'
            name='important'
            id='important'
            className='input'
            value={input.important}
            onChange={handleChange}
          />
          <label htmlFor='complete'>Completada</label>
          <input
            type='checkbox'
            name='complete'
            id='complete'
            className='input'
            value={input.complete}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          value='submit'
          className='button'
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Form
