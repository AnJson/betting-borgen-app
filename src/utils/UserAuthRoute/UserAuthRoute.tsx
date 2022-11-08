import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import LoadingScreen from '../../components/UI/LoadingScreen/LoadingScreen'
import { useAppSelector } from '../../hooks/use-app-selector'
import { UserState } from '../../store/reducers/user'

type Props = {
  redirectPath: string
  children?: JSX.Element | JSX.Element[]
}

const UserAuthRoute = ({
  redirectPath,
  children
}: Props) => {
  const { userId } = useParams<string>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
  const user = useAppSelector<UserState>((state) => state.user)

  useEffect(() => {
    const authorize = () => {
      try {
        // TODO: Implement auth.
        setTimeout(() => {
          setIsAuthorized(true)
          setIsLoading(false)
        }, 2000)
      } catch (error) {
        console.log(error)
        setIsAuthorized(false)
        setIsLoading(false)
      }
    }

    authorize()
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  if (!isAuthorized) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? <>{ children }</> : <Outlet />
}

export default UserAuthRoute
