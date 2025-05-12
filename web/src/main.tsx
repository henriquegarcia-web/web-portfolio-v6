import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import GlobalStyle from './utils/styles/globals.ts'

import { LPProvider } from '@/contexts/LPProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LPProvider>
      <GlobalStyle />
      <App />
    </LPProvider>
  </React.StrictMode>
)
