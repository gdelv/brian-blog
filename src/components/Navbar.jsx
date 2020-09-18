import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex justify-between min-h-8 bg-gray-700 text-white container p-3 min-w-full'>
            <div className="logo w-1/4">
                <NavLink 
                        exact to='/' 
                        className='mr-5 z-10'>
                            Logo
                </NavLink>
            </div>
            <div className="flex w-1/2">
                {/* page links go here */}
                <NavLink 
                    exact to='/' 
                    className='mr-5 z-10' 
                    activeClassName='border-b-2'>
                        Home
                </NavLink>
                <NavLink 
                    exact to='/blog' 
                    className='mr-5 z-10'
                    activeClassName='border-b-2'> 
                        Blog
                </NavLink>
            </div>
            <div className="button-container flex justify-around w-1/5">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
