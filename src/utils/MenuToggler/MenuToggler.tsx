import React, { useState } from 'react'
import classes from './MenuToggler.module.css'

type Props = {
  onOpen: () => void
  onClose: () => void
}

const MenuToggler = ({ onOpen, onClose } : Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const clickHandler = () => {
    if (!isOpen) {
      onOpen()
    } else {
      onClose()
    }

    setIsOpen(!isOpen)
  }

  return (
    <>
      <label htmlFor='checkbox4'>
        <input type='checkbox' id='checkbox4' className={`${classes.checkbox4} ${classes.visuallyHidden}`} />
        <div
          className={`${classes.hamburger} ${classes.hamburger4}`}
          role='button'
          tabIndex={0}
          onClick={clickHandler}
          onKeyPress={clickHandler}
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
