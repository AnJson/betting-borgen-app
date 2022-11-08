import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

import classes from './MainLayout.module.css'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

const MainLayout = ({ children } : Props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.navbar}>
        <Navigation />
      </div>
      <div className={classes.header}>
        <Header />
      </div>
      <main className={classes.main}>
        { children ? <>{ children }</> : <Outlet /> }
      </main>
    </div>
  )
}

export default MainLayout
