import React from 'react'
import { useLocation } from 'react-router-dom'
import TopNavigation from './TopNavigation'

function Home() {

  let loc = useLocation();

  return (
    <div>
      <TopNavigation/>
      <h1>Micky Family</h1>
      <h2>{loc.state && loc.state.msg}</h2>
      <img className='mcfam' src='./images/mickyfam.jpg'></img>
    </div>
  )
}

export default Home
