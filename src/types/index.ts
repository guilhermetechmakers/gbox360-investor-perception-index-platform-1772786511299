export interface User {
  id: string
  email: string
  company?: string
  role?: string
  emailVerified?: boolean
}

export interface NarrativeEvent {
  event_id: string
  company_id: string
  source: string
  platform: string
  speaker: { entity: string; inferred_role: string }
  audience_class: string
  raw_text: string
  published_at: string
  ingested_at: string
  source_payload_id: string
  s3_key: string
  authority_score: number
  credibility_scores: Record<string, number>
  narrative_topic_ids: string[]
  created_at: string
}

export interface IPIScore {
  value: number
  change: number
  narrative: number
  credibility: number
  risk: number
}

export interface NarrativeSummary {
  id: string
  topic: string
  summary: string
  authority: number
  credibility: number
  event_count: number
}

export interface Company {
  id: string
  ticker: string
  name: string
  sector?: string
}

export interface WatchlistItem {
  company: Company
  ipi: number
  change: number
}
