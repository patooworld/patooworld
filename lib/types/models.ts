export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash',
    name: 'PATOOWORLD UBA',
    provider: 'Unified Business AI (Speed and Efficiency)',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD DL',
    provider: 'Deep Learning (based on Choice)',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'PATOOWORLD ML',
    provider: 'Machine Learning (Exp)',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PATOOWORLD CV',
    provider: 'Computer Vision (Exp)',
    providerId: 'google'
  },
]
