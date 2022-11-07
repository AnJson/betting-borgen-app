/**
 * Component protecting authentication-routes.
 *
 * @author Anders Jonsson
 */

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  userId: string | null
  redirectPath: string
  children?: JSX.Element | JSX.Element[]
}

const PrivateRoute = ({ userId, redirectPath, children } : Props) => {
  if (!userId) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? <>{ children }</> : <Outlet />
}

export default PrivateRoute
