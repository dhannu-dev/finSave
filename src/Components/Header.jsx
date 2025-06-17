import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div>
        <nav className='bg-slate-200 shadow-sm flex justify-around py-3'>
            <h2 className='font-semibold text-2xl'>Fin<span className='text-blue-600'>Save</span></h2>
            <NavLink to=''><button className='bg-red-600 text-white p-2 rounded-md '>Log out</button></NavLink>
        </nav>
    </div>
  )
}

export default Header
