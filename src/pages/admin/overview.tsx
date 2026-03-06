import { Link } from 'react-router-dom'
import { Activity, Users, FileText, Database, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const health = {
  queueLength: 42,
  workers: '3/3 active',
}

const tenants = [
  { id: 't1', name: 'Acme Corp', usage: '1.2M events' },
  { id: 't2', name: 'Beta Inc', usage: '890K events' },
]

const alerts = [
  { id: '1', message: 'Ingestion delay on news adapter', severity: 'warning', time: '15m ago' },
]

export function AdminOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Platform and tenant operations
        </p>
      </div>

      {/* System health */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ingest queue</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="font-display text-2xl font-bold">{health.queueLength}</p>
            <p className="text-xs text-muted-foreground">items pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Workers</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="font-display text-2xl font-bold text-success">{health.workers}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick links</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Link to="/admin/users">
              <div className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-muted/50">
                <Users className="h-5 w-5" />
                User management
              </div>
            </Link>
            <Link to="/admin/audit">
              <div className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-muted/50">
                <FileText className="h-5 w-5" />
                Audit logs
              </div>
            </Link>
            <Link to="/admin/replay">
              <div className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-muted/50">
                <Database className="h-5 w-5" />
                Data replay
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((a) => (
                <div
                  key={a.id}
                  className="rounded-lg border border-warning/50 bg-warning/10 p-3"
                >
                  <p className="font-medium">{a.message}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tenant summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tenants.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.usage}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
