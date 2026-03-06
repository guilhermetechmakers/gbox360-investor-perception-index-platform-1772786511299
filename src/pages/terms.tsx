import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-foreground">Terms of Service</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p>Last updated: March 2025.</p>
        <p>
          By using Gbox360, you agree to these terms. Subscription terms, retention policies, and
          acceptable use are defined in your plan.
        </p>
      </div>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  )
}
