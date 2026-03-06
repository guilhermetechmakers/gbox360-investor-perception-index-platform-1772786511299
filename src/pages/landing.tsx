import { Link } from 'react-router-dom'
import { BarChart3, TrendingUp, Shield, FileSearch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[rgb(var(--muted))] px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Explainable Investor
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perception Index
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Narrative-driven IPI with auditable raw payloads. Understand why perception moves—with
            provenance, authority weighting, and replay capability.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/signup">
              <Button size="lg" className="min-w-[200px]">
                Start free trial
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Log in
              </Button>
            </Link>
          </div>

          {/* IPI sample visual */}
          <div className="mt-16 animate-fade-in-up">
            <Card className="mx-auto max-w-md overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-between bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Sample IPI</p>
                    <p className="font-display text-4xl font-bold text-primary">72</p>
                    <p className="text-sm text-success">+4.2 pts</p>
                  </div>
                  <div className="h-12 w-24 rounded-lg bg-primary/20 p-2">
                    <div className="h-full w-full rounded bg-primary/40" style={{ width: '72%' }} />
                  </div>
                </div>
                <div className="p-4 text-left text-sm text-muted-foreground">
                  Narrative 40% · Credibility 40% · Risk 20%
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Three steps to actionable investor perception insight
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Ingest & Archive',
                desc: 'Constrained live sources—news, social, transcripts—archived to S3 with immutable raw payloads.',
                icon: FileSearch,
              },
              {
                step: '02',
                title: 'Compute IPI',
                desc: 'Deterministic scoring: Narrative 40%, Credibility 40%, Risk 20%. Provisional weights, fully explainable.',
                icon: BarChart3,
              },
              {
                step: '03',
                title: 'Drill down',
                desc: '"Why did this move?"—top narratives, authority/credibility breakdowns, raw payload provenance.',
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <Card
                key={item.step}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl font-bold text-primary">0{item.step}</span>
                    <item.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[rgb(var(--muted))] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-foreground md:text-4xl">
            Built for enterprise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Audit-ready, explainable, and compliant
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Narrative-first IPI', desc: 'Not raw sentiment—explainable narratives' },
              { title: 'Raw payload archival', desc: 'Immutable S3 storage with checksums' },
              { title: 'Authority & credibility', desc: 'Weighted by source and speaker role' },
              { title: 'Replay capability', desc: 'Reprocess pipelines for debugging & tuning' },
              { title: 'Compliance-ready', desc: 'Retention policies, audit trails' },
              { title: 'Weight sandbox', desc: 'Simulate weight changes before production' },
            ].map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{f.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Ready to transform investor perception?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start your free trial. No credit card required.
          </p>
          <div className="mt-8">
            <Link to="/signup">
              <Button size="lg" className="min-w-[220px]">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
