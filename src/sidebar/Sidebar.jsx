import React from 'react'
import "./sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
            <span className="sidebartitle">ABOUT ME</span>
        <div className="sidebaritem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1KznDXFR4azitJcYeJnxE4088nVhrFJbX5uTSZMyRgAwI3SXNLKP9PQrzyf5sUb3oGk&usqp=CAU" alt="error" />
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat labore laborum animi?
            </p>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">categories</span>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">Life</li>
            <li className="sidebarlistitem">Music</li>
            <li className="sidebarlistitem">sport</li>
            <li className="sidebarlistitem">Style</li>
            <li className="sidebarlistitem">Tech</li>
            <li className="sidebarlistitem">Cinema</li>
        </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
        <i className=" sidebaricon fa-brands fa-square-facebook"></i>
        <i className="sidebaricon fa-brands fa-x-twitter"></i>
        <i className="sidebaricon fa-brands fa-square-instagram"></i>
        <i className="sidebaricon fa-brands fa-square-pinterest"></i>
        <i className="sidebaricon fa-brands fa-square-pinterest"></i>
        </div>
        </div>
        </div>
  )
}

export default Sidebar