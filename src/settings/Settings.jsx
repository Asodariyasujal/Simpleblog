import React from 'react'
import "./settings.css"
import Sidebar from "../sidebar/Sidebar"


function Settings() {
  return (
    
    <div className='settings'>
        <div className="settingswrapper">
          <div className="settingstitle">
            <span className="settingsupdatetitle">update your account</span>
            <span className="settingsdeletetitle">delete your account</span>
          </div>
          <form  className="settingsform">
            <label htmlFor="">profile picture</label>
            <div className="settingspp">
              <img src="https://www.joe.co.uk/uploads/2023/06/Screenshot-2023-06-30-at-09.28.31.png" alt="ERROR" />

              <label htmlFor="fileinput">
              <i class=" settingsppicon fa-solid fa-circle-user"></i>
              </label>
              <input type="file" id='fileinput' style={{display:"none"}}/>
            </div>
            <label >username</label>
            <input type="text" placeholder='harsimula khan' />
            <label >Email</label>
            <input type="text" placeholder='harsimulakhan@gmail.com' />
            <label >password</label>
            <input type="text" placeholder='password' />
            <label >confrim password</label>
            <input type="text" placeholder='cpassword' />
            <button className="settingssubmit">update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
        
  )
}

export default Settings