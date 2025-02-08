export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'PATOOWORLD ASSIST (2.0 Pro (Exp)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PATOOWORLD AI (2.0 Flash Thinking (Exp)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'PATOOWORLD AG (2.0-flash)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD ELITE (1.5 pro)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'deepseek-r1-distill-llama-70b',
    name: '99PACE',
    provider: 'Google + Groq = P family of models',
    providerId: 'groq'
  }
]
