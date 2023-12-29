import React from 'react'
import './home.css'
import Header from '../../Header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Post from '../../posts/Posts'

function Home() {
  return (
    <>
        <Header/>
    <div className='home'>
    <Post/>
    <Sidebar/>
    </div>
      </>
  )
}

export default Home