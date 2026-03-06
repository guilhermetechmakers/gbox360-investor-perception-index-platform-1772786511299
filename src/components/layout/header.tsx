import { Link } from 'react-router-dom'
import { BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LandingNav } from '@/components/layout/landing-nav'
import { useAuth } from '@/contexts/auth-context'

interface HeaderProps {
  variant?: 'landing' | 'dashboard'
}

export function Header({ variant = 'landing' }: HeaderProps) {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <BarChart3 className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">Gbox360</span>
        </Link>

        {variant === 'landing' && (
          <>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
            </Link>
            <Link
              to="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Start free trial</Button>
                </Link>
              </>
            )}
          </nav>
          <LandingNav />
          </>
        )}
      </div>
    </header>
  )
}
