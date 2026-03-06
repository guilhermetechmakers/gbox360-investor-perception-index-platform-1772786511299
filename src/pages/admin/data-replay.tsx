import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DataReplayPage() {
  const [tenant, setTenant] = useState('')
  const [company, setCompany] = useState('')
  const [window, setWindow] = useState('1W')
  const [isDryRun, setIsDryRun] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Data replay</h1>
        <p className="mt-1 text-muted-foreground">
          Reprocess NarrativeEvent streams (dry-run or execute)
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configure replay</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Tenant</Label>
              <Input
                placeholder="Tenant ID"
                value={tenant}
                onChange={(e) => setTenant(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Company</Label>
              <Input
                placeholder="Ticker or company ID"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Time window</Label>
            <select
              value={window}
              onChange={(e) => setWindow(e.target.value)}
              className="h-10 w-full rounded-lg border border-input bg-background px-4"
            >
              <option value="1D">1 Day</option>
              <option value="1W">1 Week</option>
              <option value="1M">1 Month</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="dryrun"
              checked={isDryRun}
              onChange={(e) => setIsDryRun(e.target.checked)}
              className="h-4 w-4 rounded"
            />
            <Label htmlFor="dryrun">Dry run (preflight only)</Label>
          </div>
          <div className="flex gap-2">
            <Button>Preflight check</Button>
            <Button variant="outline" disabled={isDryRun}>
              Execute replay
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Job history</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No replay jobs yet.</p>
        </CardContent>
      </Card>
    </div>
  )
}
