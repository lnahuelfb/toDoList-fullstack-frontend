import React, { useState } from 'react'
import './styles/TodoCard.css'

const TodoCard = (props) => {
  const [complete, setComplete] = useState(props.complete)
  const [isDeleted, setDelete] = useState(false)

  const handleDelete = async () => {
    try {
      await fetch(`https://todo-list-lnahuelfb.herokuapp.com/todos/${props.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(setDelete(true))
        .then(window.alert('Eliminado con extio!'))
    } catch (error) {
      console.error(error)
    }
  }

  const handleComplete = async () => {
    try {
      await fetch(`https://todo-list-lnahuelfb.herokuapp.com/todos/${props.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          complete: !complete
        })
      })
      setComplete(!complete)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {
        isDeleted
          ? null
          : (
            <div className='container'>
              <h3>{props.task}</h3>
              <p>Contenido: {props.description}</p>
              <p>Important: {props.important.toString()}</p>
              <p>Creado: {props.date}</p>
              <p>Complete:
                {
                  complete ? ' ✅' : ' ❌'
                }
              </p>
              <button className='card-button' onClick={() => handleComplete()}>Completado</button>
              <button className='card-button' onClick={() => handleDelete()}>Eliminar</button>
            </div>
            )
    }
    </>

  )
}

export default TodoCard
