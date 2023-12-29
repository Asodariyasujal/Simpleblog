import React from 'react'
import "./write.css"


function Write() {
  return (
    <div className='write'>
        <form className='writeform'>
            <img  className="writeimg" src="https://images.indianexpress.com/2023/12/Iran-drone-attack.jpeg?w=640" alt="" />
            <div className="writeformgroup">
            <label htmlFor="fileinput">
            <i className=" writeicon fa-solid fa-plus"></i>
            </label>
                <input type="file" id='fileinput' style={{display:'none'}}  />
                <input type="text" placeholder='title' className='writeinput' autoFocus={true}/>

            </div>
            <div className="writeformgroup">
                <textarea placeholder='tell your story... ' className='writeinput writetext' type='text'></textarea>
            </div>
            <button className='writesubmit'>submit</button>
        </form>
    </div>
  )
}

export default Write