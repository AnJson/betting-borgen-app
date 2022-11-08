/**
 * Wrapper-component to display fullscreen loading.
 *
 * @author Anders Jonsson
 */

import React from 'react'
import Loader from '../../../utils/Loader/Loader'

import classes from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={classes.wrapper}>
      <Loader />
    </div>
  )
}

export default LoadingScreen
