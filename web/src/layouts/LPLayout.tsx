// src/layouts/LandingLayout.tsx

import { Outlet } from 'react-router-dom'
// import { Header, Footer } from '@/components'

export const LPLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  )
}
