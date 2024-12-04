import React from 'react'
import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import { Route, Routes } from 'react-router'

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/read/:userId" element={<Read />} />
      <Route path="/update/:userId" element={<Update />} />
    </Routes>

  )
}

export default App