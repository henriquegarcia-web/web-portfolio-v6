import React, { createContext, useContext, useMemo, useState } from 'react'

export interface ILPContextData {
  isAuthenticated: boolean
}

export const LPContext = createContext<ILPContextData>({} as ILPContextData)

const LPProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  // ========================================================================

  const LPContextData: ILPContextData = useMemo(() => {
    return {
      isAuthenticated
    }
  }, [isAuthenticated])

  return (
    <LPContext.Provider value={LPContextData}>{children}</LPContext.Provider>
  )
}

function useLP(): ILPContextData {
  const context = useContext(LPContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { LPProvider, useLP }
