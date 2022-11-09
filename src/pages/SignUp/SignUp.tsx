import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/use-app-selector'

const SignUp = () => {
  const user = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.token) {
      navigate('home')
    }
  }, [navigate, user.token])

  return (
    <div>SignUp</div>
  )
}

export default SignUp
