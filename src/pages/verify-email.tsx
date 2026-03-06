import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

export function VerifyEmailPage() {
  const [resending, setResending] = useState(false)

  const handleResend = async () => {
    setResending(true)
    try {
      // Mock API call
      await new Promise((r) => setTimeout(r, 1000))
      toast.success('Verification email sent')
    } catch {
      toast.error('Failed to resend. Try again later.')
    } finally {
      setResending(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[rgb(var(--muted))] px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-display text-center text-2xl">
            Verify your email
          </CardTitle>
          <CardDescription className="text-center">
            We sent a verification link to your email. Click the link to activate your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button type="button" variant="outline" className="w-full" onClick={handleResend} isLoading={resending}>
            Resend verification email
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Didn&apos;t receive the email?{' '}
            <Link to="/support" className="text-primary hover:underline">
              Contact support
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
