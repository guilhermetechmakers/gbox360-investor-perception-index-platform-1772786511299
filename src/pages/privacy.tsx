import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-foreground">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p>Last updated: March 2025.</p>
        <p>
          We retain data per our retention table. Raw payloads are archived per plan. For DPO
          contact, see your account settings.
        </p>
      </div>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  )
}
