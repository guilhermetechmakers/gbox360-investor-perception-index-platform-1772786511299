import { Link } from 'react-router-dom'
import { TrendingUp, TrendingDown, Bell, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
// Mock data for Sprint 1 MVP
const watchlist = [
  { ticker: 'AAPL', name: 'Apple Inc.', ipi: 72, change: 4.2 },
  { ticker: 'MSFT', name: 'Microsoft Corp.', ipi: 68, change: -1.5 },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', ipi: 65, change: 2.1 },
]

const recentAlerts = [
  { company: 'AAPL', message: 'IPI increased 4.2 pts in 1W', time: '2h ago' },
  { company: 'MSFT', message: 'New narrative: earnings guidance', time: '5h ago' },
]

const recommended = [
  { ticker: 'AMZN', name: 'Amazon.com Inc.', sector: 'Technology' },
  { ticker: 'NVDA', name: 'NVIDIA Corp.', sector: 'Technology' },
]

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Quick snapshot of your watchlist and recent IPI shifts
        </p>
      </div>

      {/* Watchlist */}
      <Card>
        <CardHeader>
          <CardTitle>Watchlist</CardTitle>
          <CardDescription>Companies you&apos;re tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {watchlist.map((item) => (
              <Link
                key={item.ticker}
                to={`/dashboard/companies/${item.ticker}`}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
              >
                <div>
                  <p className="font-semibold">{item.ticker}</p>
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-primary">
                    {item.ipi}
                  </span>
                  <span
                    className={
                      item.change >= 0 ? 'text-success' : 'text-destructive'
                    }
                  >
                    {item.change >= 0 ? (
                      <TrendingUp className="inline h-4 w-4" />
                    ) : (
                      <TrendingDown className="inline h-4 w-4" />
                    )}{' '}
                    {Math.abs(item.change)} pts
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Button variant="outline" className="mt-4 w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add company
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((a) => (
                <div
                  key={a.company + a.time}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div>
                    <p className="font-medium">{a.company}</p>
                    <p className="text-sm text-muted-foreground">{a.message}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended companies</CardTitle>
            <CardDescription>Add to your watchlist</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommended.map((r) => (
                <div
                  key={r.ticker}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div>
                    <p className="font-semibold">{r.ticker}</p>
                    <p className="text-sm text-muted-foreground">{r.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{r.sector}</Badge>
                    <Link to={`/dashboard/companies/${r.ticker}`}>
                      <Button size="sm">View</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
