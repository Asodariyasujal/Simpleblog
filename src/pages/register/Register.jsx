import React from 'react'
import "./register.css"

function Register() {
  return (
    <div className='register'>
      <span className="registertitle">Register</span>
      <form  className="registerform">
      <label >Username</label>
        <input type="text" className='registerinput' placeholder='Enter your Username...' />
        <label >Email</label>
        <input type="text" className='registerinput' placeholder='Enter your email...' />
        <label >password</label>
        <input type="text"className='registerinput' placeholder='Enter your password...' />
        <button className="registerbutton">login</button>
        </form>
        <button className="loginregisterbutton">Login</button>
        </div>
  )
}

export default Register