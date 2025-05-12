import React, { createContext, useContext, useMemo, useState } from 'react'

export interface IMainContextData {
  isAuthenticated: boolean
}

export const MainContext = createContext<IMainContextData>(
  {} as IMainContextData
)

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  // ========================================================================

  const MainContextData: IMainContextData = useMemo(() => {
    return {
      isAuthenticated
    }
  }, [isAuthenticated])

  return (
    <MainContext.Provider value={MainContextData}>
      {children}
    </MainContext.Provider>
  )
}

function useMain(): IMainContextData {
  const context = useContext(MainContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { MainProvider, useMain }
