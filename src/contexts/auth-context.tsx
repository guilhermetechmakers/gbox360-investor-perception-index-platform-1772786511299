import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import type { User } from '@/types'

interface AuthContextValue {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, company?: string, role?: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function getStoredUser(): User | null {
  try {
    const stored = localStorage.getItem('user')
    if (stored) return JSON.parse(stored) as User
  } catch {
    localStorage.removeItem('user')
    localStorage.removeItem('auth_token')
  }
  return null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getStoredUser)
  const [isLoading] = useState(false)

  const login = useCallback(async (email: string, _password: string) => {
    // Mock auth for MVP - replace with real API
    const mockUser: User = {
      id: '1',
      email,
      company: 'Demo Corp',
      role: 'analyst',
      emailVerified: true,
    }
    localStorage.setItem('auth_token', 'mock-token')
    localStorage.setItem('user', JSON.stringify(mockUser))
    setUser(mockUser)
  }, [])

  const signup = useCallback(
    async (email: string, _password: string, company?: string, role?: string) => {
      const mockUser: User = {
        id: '1',
        email,
        company,
        role,
        emailVerified: false,
      }
      localStorage.setItem('auth_token', 'mock-token')
      localStorage.setItem('user', JSON.stringify(mockUser))
      setUser(mockUser)
    },
    []
  )

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

/* eslint-disable react-refresh/only-export-components -- useAuth is a hook, not a component */
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}
