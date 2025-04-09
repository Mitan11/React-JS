import React, { useState, useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || ["Hello"])
  const [isEdit, setIsEdit] = useState(false)

  console.log(todos)

  const addTodo = () => {
    if (todo) {
      setTodos([todo, ...todos])
      setTodo('')
    }
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const edit = (index) => {
    setIsEdit(true)
    setTodo(todos[index])
    removeTodo(index)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.length > 0 ? todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => edit(index)}>Edit</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        )) : (
          <h2>No todo found</h2>
        )}
      </ul>

    </div>
  )
}

export default App
