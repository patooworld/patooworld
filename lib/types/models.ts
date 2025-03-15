export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PATOOWORLD', 
    provider: 'Deep Learning {Study, Search and Research In-depth understanding of any subject from Computer Vision to Cybersecurity etc..}',
    providerId: 'google'
   }, 
   {
    id: 'gemini-2.0-flash',
    name: '99PACE',
    provider: 'Deep Learning {Your Conversational Chatbot. Reform, Transfrom and Generate Image. choice for IoT }',
    providerId: 'google'
   },
    {
    id: 'gemini-2.0-flash-lite-001',
    name: 'PATOOPACE',
    provider: 'Deep Learning {ELITE Stratagies is based on Choice. Best in findings, Refining, Redefining and Enhancing.}',
    providerId: 'google'
  },
]
