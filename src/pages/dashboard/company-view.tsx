import { Link, useParams } from 'react-router-dom'
import { TrendingUp, Download, Flag, FileJson, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock data
const ipi = { value: 72, change: 4.2, narrative: 40, credibility: 38, risk: 22 }
const narratives = [
  { id: '1', topic: 'Earnings guidance', summary: 'Management raised FY25 outlook', authority: 0.6, credibility: 0.8 },
  { id: '2', topic: 'Product launch', summary: 'New product announcement drove positive sentiment', authority: 0.3, credibility: 0.7 },
  { id: '3', topic: 'Analyst upgrade', summary: 'Multiple analysts raised price targets', authority: 0.6, credibility: 0.75 },
]

const events = [
  { id: '1', source: 'News', published: '2025-03-05', snippet: 'Company reports strong Q4 results...' },
  { id: '2', source: 'Transcript', published: '2025-03-04', snippet: 'CEO commentary on growth outlook...' },
]

export function CompanyViewPage() {
  const { ticker } = useParams<{ ticker: string }>()
  const company = { ticker: ticker ?? 'AAPL', name: 'Apple Inc.' }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            {company.ticker} — {company.name}
          </h1>
          <p className="mt-1 text-muted-foreground">1W window · Last updated 2h ago</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Flag className="mr-2 h-4 w-4" />
            Flag
          </Button>
        </div>
      </div>

      {/* IPI Card */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-1 items-center justify-between bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Investor Perception Index</p>
                <p className="font-display text-5xl font-bold text-primary">{ipi.value}</p>
                <p className="text-success">
                  <TrendingUp className="inline h-4 w-4" /> +{ipi.change} pts
                </p>
              </div>
              <div className="h-24 w-32 rounded-lg bg-primary/20 p-2">
                <div
                  className="h-full rounded bg-primary/60 transition-all"
                  style={{ width: `${ipi.value}%` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-border border-t border-border md:border-t-0 md:border-l">
              {[
                { label: 'Narrative', value: ipi.narrative },
                { label: 'Credibility', value: ipi.credibility },
                { label: 'Risk', value: ipi.risk },
              ].map((d) => (
                <div key={d.label} className="p-4 text-center">
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                  <p className="font-display text-xl font-bold">{d.value}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top 3 Narratives */}
      <Card>
        <CardHeader>
          <CardTitle>Top 3 contributing narratives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {narratives.map((n) => (
              <div
                key={n.id}
                className="flex items-start justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-semibold">{n.topic}</p>
                  <p className="text-sm text-muted-foreground">{n.summary}</p>
                  <div className="mt-2 flex gap-2">
                    <Badge variant="secondary">Authority {Math.round(n.authority * 100)}%</Badge>
                    <Badge variant="outline">Credibility {Math.round(n.credibility * 100)}%</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to={`/dashboard/companies/${company.ticker}/drill-down`} className="mt-4 block">
            <Button>
              Why did this move?
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Recent narrative events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {events.map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Badge>{e.source}</Badge>
                    <span className="text-sm text-muted-foreground">{e.published}</span>
                  </div>
                  <p className="mt-1 text-sm">{e.snippet}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <FileJson className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
