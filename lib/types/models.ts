export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'Gemini 2.0 Pro (Exp)',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'Gemini 2.0 Flash Thinking (Exp)',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0-flash',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'Gemini 1.5 pro',
    provider: 'Google Generative AI',
    providerId: 'google'
  }
]
