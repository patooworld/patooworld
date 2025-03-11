export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash',
    name: '99PACE',
    provider: 'Deep Learning (Data analysis, Sales Chatbot, Marketing Vision, pattern recognition Speed and Efficiency)',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD',
    provider: 'Deep Learning (Study and Research In-depth understanding of any subject based on Choice)',
    providerId: 'google'
  },
]
