import React from 'react'
import classes from './ActionBox.module.css'

type Props = {
  header: string
  children: JSX.Element | JSX.Element[]
}

const ActionBox = ({ header, children } : Props) => {
  return (
    <div className={classes['action-box']}>
      <div className={classes.header}>
        <h2>{ header }</h2>
      </div>
      <div className={classes.content}>
        { children }
      </div>
    </div>
  )
}

export default ActionBox
