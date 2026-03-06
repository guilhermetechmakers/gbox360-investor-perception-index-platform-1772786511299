import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const logs = [
  { id: '1', type: 'ingestion', action: 'Event ingested', payloadId: 'raw-abc123', time: '2025-03-06 10:32' },
  { id: '2', type: 'user', action: 'Login', payloadId: '-', time: '2025-03-06 10:30' },
  { id: '3', type: 'ingestion', action: 'Event ingested', payloadId: 'raw-def456', time: '2025-03-06 10:28' },
]

export function AuditLogsPage() {
  const [filter, setFilter] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Audit logs</h1>
        <p className="mt-1 text-muted-foreground">
          Immutable audit trail for ingestion and user actions
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Event log</CardTitle>
            <div className="flex gap-2">
              <Input
                placeholder="Filter..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-48"
              />
              <Button variant="outline">Export CSV</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium">Time</th>
                  <th className="pb-3 text-left text-sm font-medium">Type</th>
                  <th className="pb-3 text-left text-sm font-medium">Action</th>
                  <th className="pb-3 text-left text-sm font-medium">Payload ID</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((l) => (
                  <tr key={l.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-3 text-sm">{l.time}</td>
                    <td className="py-3 text-sm">{l.type}</td>
                    <td className="py-3 text-sm">{l.action}</td>
                    <td className="py-3">
                      {l.payloadId !== '-' ? (
                        <Link to={`/payload/${l.payloadId}`} className="text-primary hover:underline">
                          {l.payloadId}
                        </Link>
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Retention: 90 days per plan
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
