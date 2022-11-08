/**
 * Design-component outputting loader.
 *
 * @author Anders Jonsson
 */

import React from 'react'

import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.spinner} />
    </div>
  )
}

export default Loader
