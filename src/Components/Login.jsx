import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault()
        navigate('/home')

    }
  return (
    <div className='form'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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

export default Login
