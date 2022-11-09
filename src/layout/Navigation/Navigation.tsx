import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/use-app-dispatch'
import { useAppSelector } from '../../hooks/use-app-selector'
import { UserState, userActions } from '../../store/reducers/user'
import classes from './Navigation.module.css'

type Props = {
  onNavClick: () => void
}

const Navigation = ({ onNavClick } : Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector<UserState>((state) => state.user)

  const logOutClickHandler = async () => {
    onNavClick()
    dispatch(userActions.logout())
    navigate('/')
  }

  const logInClickHandler = async () => {
    onNavClick()
    navigate('/login')
  }

  const registerClickHandler = async () => {
    onNavClick()
    navigate('/register')
  }

  return (
    <nav className={classes.navigation}>
      <ul className={classes.menu}>
        <li className={classes['menu-item']}>
          <NavLink onClick={onNavClick} className={(navData) => (navData.isActive ? classes.active : '')} to='/'>
            Start
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink onClick={onNavClick} className={(navData) => (navData.isActive ? classes.active : '')} to='/home'>
            Home
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink onClick={onNavClick} className={(navData) => (navData.isActive ? classes.active : '')} to='/groups'>
            Groups
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink onClick={onNavClick} className={(navData) => (navData.isActive ? classes.active : '')} to='/users/2ss9g0d20gh'>
            User 1
          </NavLink>
        </li>
        <li className={classes['menu-item']}>
          <NavLink onClick={onNavClick} className={(navData) => (navData.isActive ? classes.active : '')} to='/groups/2ss9g0d20gh'>
            Group 23
          </NavLink>
        </li>
        { !user.token && (
          <li className={`${classes['menu-item']} ${classes.action}`}>
            <button type='button' className={classes['auth-action']} onClick={registerClickHandler}>
              Registrera
            </button>
          </li>
        )}
        { !user.token && (
          <li className={`${classes['menu-item']} ${classes.action}`}>
            <button type='button' className={classes['auth-action']} onClick={logInClickHandler}>
              Logga in
            </button>
          </li>
        )}
        { user.token && (
          <li className={classes['menu-item']}>
            <button type='button' className={classes['auth-action']} onClick={logOutClickHandler}>
              Logga ut
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
