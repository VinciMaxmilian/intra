import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { api } from './services/api'
import type { User } from './types'

interface AuthCtx {
  user: User | null
  login: (u: string, p: string) => Promise<void>
  logout: () => void
  setUser: (u: User) => void
}

const Ctx = createContext<AuthCtx>(null!)
const KEY = 'intra-a1-session'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let logged = false
    try {
      logged = !!localStorage.getItem(KEY)
    } catch {
      /* sem storage */
    }
    if (logged) api.me().then(setUser).finally(() => setReady(true))
    else setReady(true)
  }, [])

  const login = async (u: string, p: string) => {
    setUser(await api.login(u, p))
    try {
      localStorage.setItem(KEY, '1')
    } catch {
      /* ignore */
    }
  }
  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem(KEY)
    } catch {
      /* ignore */
    }
  }

  if (!ready) return null
  return <Ctx.Provider value={{ user, login, logout, setUser }}>{children}</Ctx.Provider>
}

export const useAuth = () => useContext(Ctx)
