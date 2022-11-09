import { useState } from 'react'

const useInput = (validateValue: (value: string) => any, initialValue = '') => {
  const [enteredValue, setEnteredValue] = useState<string>(initialValue)
  const [isTouched, setIsTouched] = useState<boolean>(false)

  const valueIsValid = validateValue(enteredValue)
  const touchedFieldHasError = !valueIsValid && isTouched

  const valueChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredValue((event.target as HTMLInputElement).value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    setEnteredValue,
    isValid: valueIsValid,
    hasError: touchedFieldHasError,
    reset,
    valueChangedHandler,
    inputBlurHandler
  }
}

export default useInput
