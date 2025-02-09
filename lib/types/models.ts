export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'Cloudinpace 2.0 Pro (PW)',
    provider: 'Google Gemini API-powered',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PatooPace 2.0 Flash Thinking (PW)',
    provider: 'Google Gemini API-powered',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'ElevationPace  2.0-flash)',
    provider: 'Google Gemini API-powered (PW)',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'SolidSpace 1.5 pro)',
    provider: 'Google Gemini API-powered (PW)',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-exp',
    name: '99PACE',
    provider: 'Google Gemini API-powered (PW)',
    providerId: 'google'
  }
]
