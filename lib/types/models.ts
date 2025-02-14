export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash',
    name: 'PATOOWORLD',
    provider: 'Gemini AI-powered world',
    providerId: 'google'
  },
 {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'PATOOWORLD Cyb',
    provider: 'Gemini 2.0 Pro (Exp)',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PATOOWORLD CVision',
    provider: 'Gemini 2.0 Flash Thinking (Exp)',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD LLM Pro',
    provider: 'Gemini 1.5 pro',
    providerId: 'google'
  },
]
