import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-16">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground">About Gbox360</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Gbox360 delivers a real-time, explainable Investor Perception Index (IPI) for public
          companies. Narrative-driven, audit-ready, and built for enterprise.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How it works</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none text-muted-foreground">
          <p>
            We ingest constrained live data—one reliable news feed, one read-only social feed, and
            batch earnings transcripts. Raw payloads are archived to S3 for audit. Inputs are
            normalized into an immutable NarrativeEvent model. IPI is computed using provisional
            weights: Narrative 40%, Credibility 40%, Risk proxy 20%.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </div>
    </div>
  )
}
