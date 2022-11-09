import React from 'react'
import classes from './Alert.module.css'

type Props = {
  absolute?: boolean
  type?: string
  children?: JSX.Element | JSX.Element[]
}

const Alert = ({ absolute, type, children } : Props) => {
  const enteredType = type?.toLowerCase() || 'success'
  const validTypes = ['success', 'error', 'warning']
  const alertType = validTypes.includes(enteredType) ? enteredType : 'success'

  return (
    <div className={`${classes.alert} ${absolute ? classes['alert--absolute'] : ''} ${classes[`alert--${alertType}`]}`}>
      { children }
    </div>
  )
}

export default Alert
