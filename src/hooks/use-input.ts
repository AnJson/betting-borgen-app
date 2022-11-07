/**
 * Custom hook to validate inputfields.
 *
 * @author Anders Jonsson
 */

import { useState } from 'react'

/**
 * Hook to manage validation-state of inputfields.
 *
 * @param {Function} validateValue - Function to validate the value of the input-stage when touched.
 * @param {string} initialValue - Optional initial value to set on input.
 * @returns {object} - Object with methods and state-values to use in components.
 */
const useInput = (validateValue, initialValue = '') => {
  const [enteredValue, setEnteredValue] = useState(initialValue)
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const touchedFieldHasError = !valueIsValid && isTouched

  /**
   * Set the enteredValue state on change.
   *
   * @param {React.ChangeEvent} event - Event-object.
   */
  const valueChangedHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  /**
   * Set isTouched-state to true.
   *
   */
  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  /**
   * Reset state to empty value and not touched.
   *
   */
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
