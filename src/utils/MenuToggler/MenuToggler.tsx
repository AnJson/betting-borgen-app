import React from 'react'
import classes from './MenuToggler.module.css'

type Props = {
  isOpen: boolean
  onClick: () => void
}

const MenuToggler = ({ isOpen, onClick } : Props) => {
  return (
    <>
      <label htmlFor='checkbox4'>
        <input type='checkbox' id='checkbox4' readOnly checked={isOpen} className={`${classes.checkbox4} ${classes.visuallyHidden}`} />
        <div
          className={`${classes.hamburger} ${classes.hamburger4}`}
          role='button'
          tabIndex={0}
          onClick={onClick}
          onKeyPress={onClick}
        >
          <span className={`${classes.bar} ${classes.bar1}`} />
          <span className={`${classes.bar} ${classes.bar2}`} />
          <span className={`${classes.bar} ${classes.bar3}`} />
          <span className={`${classes.bar} ${classes.bar4}`} />
          <span className={`${classes.bar} ${classes.bar5}`} />
        </div>
      </label>
    </>
  )
}

export default MenuToggler
