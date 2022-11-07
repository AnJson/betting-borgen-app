import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to='/'>
        <h1>Betting-Borgen</h1>
      </NavLink>
    </header>
  )
}

export default Header
