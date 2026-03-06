import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

export function SupportPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    toast.success('Message sent. We\'ll get back to you soon.')
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-16">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground">Help & Support</h1>
        <p className="mt-4 text-muted-foreground">
          FAQs, onboarding, and contact support
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact support</CardTitle>
          <CardDescription>
            Send us a message and we&apos;ll respond within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <p className="text-muted-foreground">Thank you. We&apos;ve received your message.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <textarea
                  className="flex min-h-[120px] w-full rounded-lg border border-input bg-background px-4 py-2 text-sm"
                  placeholder="Describe your issue..."
                  required
                />
              </div>
              <Button type="submit">Send</Button>
            </form>
          )}
        </CardContent>
      </Card>

      <Link to="/">
        <Button variant="outline">Back to home</Button>
      </Link>
    </div>
  )
}
