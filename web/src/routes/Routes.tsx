import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { PublicRoute } from './RouteGuards'

import {
  HomeScreen,
  AboutScreen,
  ProjectsScreen,
  ContactScreen
} from '@/screens'
import { MainLayout } from '@/layouts/MainLayout'
import { useMain } from '@/contexts/MainProvider'

const ROUTES = {
  HOME: '/',
  ABOUT: '/sobre-mim',
  PROJECTS: '/projetos',
  CONTACT: '/contato'
}

const AppRoutes = () => {
  const { isAuthenticated } = useMain()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <MainLayout />
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
