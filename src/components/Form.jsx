/* eslint-disable no-undef */
import React, { useState } from 'react'
import styles from './styles/Form'

const Form = () => {
  const [input, setInput] = useState({
    task: '',
    description: '',
    important: false,
    complete: false
  }
  )

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://todo-list-lnahuelfb.herokuapp.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
      .then(window.alert('Tarea agregada con exito!'))
  }

  return (
    <div style={styles.container}>
      <h2>Crea una nueva tarea!</h2>
      <form
        style={styles.form}
        onSubmit={handleSubmit}
      >
        <label htmlFor='task'>Tarea</label>
        <input
          type='text'
          name='task'
          id='task'
          style={styles.input}
          value={input.task}
          onChange={handleChange}
          required
        />
        <label htmlFor='description'>Descripcion</label>
        <input
          type='text'
          name='description'
          id='description'
          style={styles.input}
          value={input.description}
          onChange={handleChange}
          required
        />
        <div style={styles.check}>
          <label htmlFor='important'>Importante</label>
          <input
            type='checkbox'
            name='important'
            id='important'
            style={styles.input}
            value={input.important}
            onChange={handleChange}
          />
          <label htmlFor='complete'>Completada</label>
          <input
            type='checkbox'
            name='complete'
            id='complete'
            style={styles.input}
            value={input.complete}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          value='submit'
          style={styles.button}
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Form
