import React, { useState } from 'react'
import useInput from '../../hooks/use-input'
import ActionBox from '../../utils/ActionBox/ActionBox'
import Alert from '../../utils/Alert/Alert'
import Button from '../../utils/Button/Button'
import Loader from '../../utils/Loader/Loader'
import classes from './Login.module.css'

type Props = {
  onLogin: (email: string, password: string) => void
}

const Login = ({ onLogin } : Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [invalidLogin, setInvalidLogin] = useState<boolean>(false)

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    reset: passwordReset,
    valueChangedHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler
  } = useInput((val) => val.length > 0)

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: emailReset,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput((val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))

  const loginSubmitHandler = (event: SubmitEvent) => {
    try {
      event.preventDefault()

      if (invalidLogin) {
        setInvalidLogin(false)
      }

      setIsLoading(true)
      onLogin(emailValue, passwordValue)
      setIsLoading(false)
      emailReset()
      passwordReset()
    } catch (error) {
      setIsLoading(false)
      emailReset()
      passwordReset()
      setInvalidLogin(true)
    }
  }

  let content = (
    <form className={classes.form} autoComplete='off'>
      <fieldset className={`${classes.fieldset} ${classes['fieldset--column']}`}>
        <label className={`${classes.label} ${classes['label--column']}`} htmlFor='email'>
          <p className={classes['label-text']}>Epost: { emailHasError && <span data-testid='email-error-text' className={classes['error-message']}>Skriv in en giltig epost.</span>}</p>
          <input className={`${classes.input} ${emailHasError ? classes.error : ''}`} data-testid='email-input' id='email' type='email' value={emailValue} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
        </label>
      </fieldset>
      <fieldset className={`${classes.fieldset} ${classes['fieldset--column']}`}>
        <label className={`${classes.label} ${classes['label--column']}`} htmlFor='password'>
          <p className={classes['label-text']}>Lösenord: { passwordHasError && <span data-testid='password-error-text' className={classes['error-message']}>Skriv in ett lösenord.</span>}</p>
          <input className={`${classes.input} ${passwordHasError ? classes.error : ''}`} data-testid='password-input' id='password' type='password' value={passwordValue} onBlur={passwordBlurHandler} onChange={passwordChangeHandler} />
        </label>
      </fieldset>
      <fieldset className={`${classes.fieldset} ${classes['fieldset--row']}`}>
        <Button data-testid='email-login-button' onClick={loginSubmitHandler} disabled={!emailIsValid || !passwordIsValid}>Logga in</Button>
      </fieldset>
    </form>
  )

  if (isLoading) {
    content = (
      <div className={classes['loading-wrapper']}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={classes.wrapper}>
      { invalidLogin && <Alert absolute type='error'><p>Fel epost eller lösenord.</p></Alert> }
      <div className={classes['action-wrapper']}>
        <ActionBox header='Logga in'>
          { content }
        </ActionBox>
      </div>
    </div>
  )
}

export default Login
