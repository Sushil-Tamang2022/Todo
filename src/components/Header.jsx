import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-900 text-white p-2 space-x-10'>
        <NavLink to='/'>Home</NavLink>
        {/* <NavLink to='/todo'>Todo</NavLink>  */}
        <NavLink to='/nextTodo'>Todo</NavLink>
    </div>
  )
}

export default Header
