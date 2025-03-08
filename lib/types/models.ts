export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
  id: 'deepseek-r1-distill-llama-70b',
  name: '99PACE',
  provider: 'Conversational Chatbot ( Social, Sales Marketing Chatbot Assistant with Speed of Light.)',
  providerId: 'groq'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'PATOOWORLD AIs',
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1622166260.
    provider: 'Deep Learning (Speed and Efficiency in generating text, images, audio, and video)',
    providerId: 'google'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD SR',
    provider: 'Deep Dive AI-driven Tools(Search, poems, code, scripts, musical pieces, email, Study and Research In-depth understanding of any subject based on Choice etc.)',
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
