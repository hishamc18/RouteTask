import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/login')

    }
  return (
    <div className='form'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Email: </label>
            <input type="email" required/>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Register
