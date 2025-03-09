import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='p-6 bg-slate-700 flex flex-row flex-wrap place-content-between'>
        <div><h1 className='text-4xl text-white'>Portfolio</h1></div>
        <div className='flex flex-wrap space-x-8'>
            <NavLink to='/'><button className='text-xl text-white hover:bg-slate-800 rounded-lg px-6 py-2 '>Home</button></NavLink>
            <NavLink to='/about'><button className='text-xl  text-white hover:bg-slate-800 rounded-lg px-6 py-2'>About</button></NavLink>
            <NavLink to='/education'><button className='text-xl  text-white hover:bg-slate-800 rounded-lg px-6 py-2'>Education</button></NavLink>
            <NavLink to='/skills'><button className='text-xl  text-white hover:bg-slate-800 rounded-lg px-6 py-2 '>Skills</button></NavLink>
            <NavLink to='/projects'><button className='text-xl  text-white hover:bg-slate-800 rounded-lg px-6 py-2'>Projects</button></NavLink>
            <NavLink to='/contact'><button className='text-xl  text-white hover:bg-slate-800 rounded-lg px-6 py-2 '>Contact</button></NavLink>
        </div>
    </div>
  )
}

export default NavBar
