export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'ELITE FLOW (G 2.0 Pro (Exp)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PATOOPACE RBP (G 2.0 Flash Thinking (Exp)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Elevation Pace (G 2.0-flash)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'SOLIDSPACE (G 1.5 pro)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'deepseek-r1-distill-llama-70b',
    name: '99PACE (Groq-llama-70b)',
    provider: 'GOOGLE GEMINI Family of Models',
    providerId: 'groq'
  }
]
