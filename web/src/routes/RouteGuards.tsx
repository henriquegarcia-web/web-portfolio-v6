// src/routes/RouteGuards.tsx

import { Navigate, Outlet } from 'react-router-dom'

interface RouteGuardProps {
  isAuthenticated: boolean
  children?: React.ReactNode
}

export const PrivateRoute = ({
  isAuthenticated,
  children
}: RouteGuardProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children ? <>{children}</> : <Outlet />
}

export const PublicRoute = ({ isAuthenticated, children }: RouteGuardProps) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return children ? <>{children}</> : <Outlet />
}
