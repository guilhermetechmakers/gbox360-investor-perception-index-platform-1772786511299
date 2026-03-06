import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'

export function LandingNav() {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()

  return (
    <>
      <div className="flex items-center gap-4 md:hidden">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" onClick={() => setOpen(false)}>
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => { logout(); setOpen(false) }}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setOpen(false)}>
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setOpen(false)}>
              <Button size="sm">Start free trial</Button>
            </Link>
          </>
        )}
        <Button variant="ghost" size="sm" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b border-border bg-card p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              to="/#how-it-works"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              How it works
            </Link>
            <Link
              to="/#features"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
