import React from 'react'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=' p-2'>
    <Outlet/>
    </div>
  )
}

export default Body