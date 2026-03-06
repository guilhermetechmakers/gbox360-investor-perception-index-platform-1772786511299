import { useParams, Link } from 'react-router-dom'
import { Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Mock raw payload
const mockPayload = {
  source: 'news',
  published_at: '2025-03-05T14:32:00Z',
  headline: 'Company reports strong Q4 results',
  body: 'Full article text...',
  checksum: 'sha256:abc123...',
}

export function RawPayloadViewerPage() {
  const { payloadId } = useParams<{ payloadId: string }>()

  return (
    <div className="space-y-6">
      <div>
        <Link to="/admin/audit" className="text-sm text-primary hover:underline">
          ← Back to audit logs
        </Link>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          Raw payload: {payloadId ?? 'unknown'}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Metadata</CardTitle>
        </CardHeader>
        <CardContent>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Checksum</dt>
                <dd className="font-mono">{mockPayload.checksum}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">S3 key</dt>
                <dd className="font-mono">payloads/{payloadId}.json</dd>
              </div>
            </dl>
            <Button variant="outline" size="sm" className="mt-4">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Raw JSON</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
            {JSON.stringify(mockPayload, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
