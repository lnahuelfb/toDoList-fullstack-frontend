import React, { useState } from 'react'
import styles from './styles/TodoCard'

const TodoCard = (props) => {
  const [complete, setComplete] = useState(props.complete)

  const handleDelete = () => {
    fetch(`http://localhost:3001/todos/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        window.alert('Eliminado con extio!')
      }
      )
  }

  const handleComplete = async () => {
    console.log(props.id)

    try {
      await fetch(`http://localhost:3001/todos/${props.id}`, {
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
    <div style={styles.container}>
      <h3>{props.task}</h3>
      <p>Contenido: {props.description}</p>
      <p>Important: {props.important.toString()}</p>
      <p>Complete:
        {
          complete ? '✅' : '❌'
        }
      </p>
      <button onClick={() => handleComplete()}>Completado</button>
      <button onClick={() => handleDelete()}>Eliminar</button>
    </div>
  )
}

export default TodoCard
