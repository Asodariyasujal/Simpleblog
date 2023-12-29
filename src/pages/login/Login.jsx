import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className='login'>
      <span className="logintitle">Login</span>
      <form  className="loginform">
        <label >Email</label>
        <input type="text" className='logininput' placeholder='Enter your email...' />
        <label >password</label>
        <input type="text"className='logininput' placeholder='Enter your password...' />
        <button className="loginbutton">login</button>
        </form>
        <button className="loginregisterbutton">register</button>
        </div>
  )
}

export default Login