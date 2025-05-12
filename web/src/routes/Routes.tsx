import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { PublicRoute } from './RouteGuards'

import {
  HomeScreen,
  AboutScreen,
  ProjectsScreen,
  ContactScreen
} from '@/screens'
import { LPLayout } from '@/layouts/LPLayout'
import { useLP } from '@/contexts/LPProvider'

const ROUTES = {
  HOME: '/',
  ABOUT: '/sobre-mim',
  PROJECTS: '/projetos',
  CONTACT: '/contato'
}

const AppRoutes = () => {
  const { isAuthenticated } = useLP()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <LPLayout />
            </PublicRoute>
          }
        >
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
          <Route path={ROUTES.ABOUT} element={<AboutScreen />} />
          <Route path={ROUTES.PROJECTS} element={<ProjectsScreen />} />
          <Route path={ROUTES.CONTACT} element={<ContactScreen />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
