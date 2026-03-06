import { Link, useParams } from 'react-router-dom'
import { Play, Pause, SkipForward, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'

const decomposition = [
  { name: 'Narrative', value: 40, color: 'rgb(47, 111, 99)' },
  { name: 'Credibility', value: 40, color: 'rgb(43, 98, 80)' },
  { name: 'Risk', value: 20, color: 'rgb(85, 85, 85)' },
]

const weights = [
  { label: 'Narrative', value: 40, min: 0, max: 100 },
  { label: 'Credibility', value: 40, min: 0, max: 100 },
  { label: 'Risk', value: 20, min: 0, max: 100 },
]

export function DrillDownPage() {
  const { ticker } = useParams<{ ticker: string }>()

  return (
    <div className="space-y-8">
      <div>
        <Link
          to={`/dashboard/companies/${ticker}`}
          className="text-sm text-primary hover:underline"
        >
          ← Back to {ticker}
        </Link>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          Why did this move?
        </h1>
        <p className="mt-1 text-muted-foreground">
          Deep explainability and simulation
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Decomposition chart */}
        <Card>
          <CardHeader>
            <CardTitle>IPI decomposition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={decomposition}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {decomposition.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Weights sandbox */}
        <Card>
          <CardHeader>
            <CardTitle>Weights sandbox</CardTitle>
            <p className="text-sm text-muted-foreground">
              Simulate weight changes to see impact on IPI
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {weights.map((w) => (
              <div key={w.label}>
                <div className="flex justify-between text-sm">
                  <span>{w.label}</span>
                  <span>{w.value}%</span>
                </div>
                <input
                  type="range"
                  min={w.min}
                  max={w.max}
                  defaultValue={w.value}
                  className="w-full accent-primary"
                />
              </div>
            ))}
            <Button className="w-full">Simulate</Button>
          </CardContent>
        </Card>
      </div>

      {/* Replay controls */}
      <Card>
        <CardHeader>
          <CardTitle>Replay controls</CardTitle>
          <p className="text-sm text-muted-foreground">
            Step through events to inspect provenance
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Play
            </Button>
            <Button variant="outline" size="sm">
              <Pause className="mr-2 h-4 w-4" />
              Pause
            </Button>
            <Button variant="outline" size="sm">
              <SkipForward className="mr-2 h-4 w-4" />
              Step
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Event list with provenance */}
      <Card>
        <CardHeader>
          <CardTitle>Event list with provenance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { id: 'evt-1', source: 'News', date: '2025-03-05', payloadId: 'raw-abc123' },
              { id: 'evt-2', source: 'Transcript', date: '2025-03-04', payloadId: 'raw-def456' },
            ].map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-medium">{e.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {e.source} · {e.date}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  View raw payload ({e.payloadId})
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
