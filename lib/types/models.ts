export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash',
    name: 'PATOOWORLD Bot',
    provider: 'Deep Learning (Data analysis, Marketing Vision, pattern recognition Speed and Efficiency)',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD SR',
    provider: 'Deep Dive (Study and Research In-depth understanding of any subject based on Choice)',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'PATOOWORLD RS',
    provider: 'Deep Dive (Research, and Code Investigator with Detailed analysis in Application development, Cloud base historical events.etc(Exp)',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PATOOWORLD CV',
    provider: 'Deep Learning (Algorithmic trained on large datasets for critical thinking in Computer Vision(Exp)',
    providerId: 'google'
  },
]
