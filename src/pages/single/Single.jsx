import React from 'react'
import "./single.css"
import Sidebar from '../../sidebar/Sidebar'
import Singlepost from '../../singlepost/Singlepost'

function single() {
  return (
    <>
    <div className='single'>

        <Singlepost/>
        <Sidebar/>
        </div>
    </>
    
  )
}

export default single