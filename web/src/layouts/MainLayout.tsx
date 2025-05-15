// src/layouts/LandingLayout.tsx

import { Outlet } from 'react-router-dom'

import { Header, Footer } from '@/components'
import { Screen } from '@/utils/styles/commons'

export const MainLayout = () => {
  return (
    <Screen>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </Screen>
  )
}
