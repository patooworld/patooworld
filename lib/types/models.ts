export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'PW AI (2.0 Pro (Exp)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PW AI (2.0 Flash Thinking (Exp)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'PW AI (2.0-flash)',
    provider: '',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'PW ELITE (1.5 pro)',
    provider: 'Google Gemini family of models',
    providerId: 'google'
  },
  {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: 'Groq 99PACE',
    provider: 'Groq',
    providerId: 'groq'
  },
  {
    id: 'deepseek-r1-distill-llama-70b',
    name: 'Elevationpace',
    provider: 'Groq',
    providerId: 'groq'
  }
]
