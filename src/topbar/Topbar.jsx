import React from 'react'
// import {Link} from "react-router-dom"
import "./topbar.css"

function Topbar() {
  // const user = true;
  return (
    <div className='top'>
        <div className="topbarleft">
        <i className=" topsearchicon fa-brands fa-square-facebook"></i>
        <i className="topsearchicon fa-brands fa-x-twitter"></i>
        <i className="topsearchicon fa-brands fa-square-instagram"></i>
        <i className="topsearchicon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topbarcenter">
            <ul className="toplist">
                <li className='toplistitem'>
                  HOME
                </li>
                <li className='toplistitem'>ABOUT</li>
                <li className='toplistitem'>CONTACT
                  </li>
                <li className='toplistitem'>WRITE</li>
                <li className='toplistitem'>LOGOUT</li>
            </ul>
        </div>
        <div className="topbarright">

              
            <img className='topimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDrPgxPsJhLeOzevb21J3QgYWQiwSwujU19xO1JSuzF7xrFAwleyyb0cc8xgM6V1C384&usqp=CAU" alt="error" />
            <i className=" top1searchicon fa-solid fa-magnifying-glass"></i>

        </div>

    </div>

  )
}

export default Topbar