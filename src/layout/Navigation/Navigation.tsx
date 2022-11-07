import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/use-app-dispatch'
import { useAppSelector } from '../../hooks/use-app-selector'
import { UserState, userActions } from '../../store/reducers/user'
import classes from './Navigation.module.css'

/**
 * Navigation component to hold navigation icons and notifications menu.
 *
 * @returns {JSX} - JSX.
 */
const Navigation = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector<UserState>((state) => state.user)

  const signOutClickHandler = async () => {
    dispatch(userActions.logout())
    // NOTE: navigate()??
  }

  return (
    <nav className={classes.navigation}>
      <ul className={classes.menu}>
        <li className={classes['menu-item']}>
          <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/'>
            Start
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/home'>
            Home
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/groups'>
            Groups
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/users/2ss9g0d20gh'>
            User 1
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/groups/2ss9g0d20gh'>
            Group 23
          </NavLink>
        </li>

        <li className={classes['menu-item']}>
          <button type='button' onClick={signOutClickHandler}>
            Logga ut
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
