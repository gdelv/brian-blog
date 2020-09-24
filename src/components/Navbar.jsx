import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'
import { Hamburger } from './Hamburger'

export const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)
    const [hamburgerName, setHamburgerName] = useState('')
    const changeClassName  = () => {
        setHamburger(!hamburger)
        return hamburger ? setHamburgerName('is-active') : setHamburgerName('')
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink 
                        exact to='/' 
                        className='navbar-item'>
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo'/>
                </NavLink>
                <Hamburger
                    hamburgerName={hamburgerName}
                    changeClassName={changeClassName}
                />
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${hamburgerName}`}>
                <div className="navbar-start">
                    <NavLink 
                            exact to='/' 
                            className='navbar-item'>
                            Blog
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <Button
                            title='Sign In'
                        />
                        <Button
                            title='Get Started'
                        />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
