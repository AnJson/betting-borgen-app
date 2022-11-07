/**
 * Layout-component to wrap the application in a specific layout.
 *
 * @author Anders Jonsson
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

import classes from './MainLayout.module.css'

/**
 * Wrapper-component for the layout of the application.
 *
 * @param {JSX[]} children - Props.children elements.
 * @return {JSX} - JSX.
 */
const MainLayout = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.navbar}>
        <Navigation />
      </div>
      <div className={classes.header}>
        <Header />
      </div>
      <main className={classes.main}>
        { children || <Outlet /> }
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element
}

MainLayout.defaultProps = {
  children: undefined
}

export default MainLayout
