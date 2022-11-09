import React, { MouseEventHandler, ReactNode } from 'react'
import classes from './Button.module.css'

type Props = {
  onClick: (event: SubmitEvent) => void
  disabled?: boolean
  children?: ReactNode
}

const Button = ({ children, onClick, disabled } : Props) => {
  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    onClick((event as unknown) as SubmitEvent)
  }

  return (
    <button
      disabled={disabled}
      className={classes.btn}
      type='button'
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default Button
