import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuToggler from '../../utils/MenuToggler/MenuToggler'
import Navigation from '../Navigation/Navigation'
import classes from './Header.module.css'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const toggleMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to='/'>
        <h1 className={classes.logo}>Betting-Borgen</h1>
      </NavLink>
      <MenuToggler isOpen={menuIsOpen} onClick={toggleMenuHandler} />
      <div className={`${classes.menu} ${menuIsOpen && classes.open}`}>
        <Navigation onNavClick={toggleMenuHandler} />
      </div>
    </header>
  )
}

export default Header
