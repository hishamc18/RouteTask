import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import './App.css/'

function App() {
  return (

        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Routes>
  )
}

export default App
