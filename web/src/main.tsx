import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import GlobalStyle from './utils/styles/globals.ts'

import { MainProvider } from '@/contexts/MainProvider.tsx'
import { CustomCursor } from '@/components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider>
      <GlobalStyle />
      <App />
      <CustomCursor />
    </MainProvider>
  </React.StrictMode>
)
