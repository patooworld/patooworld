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
    id: 'gemma-3-27b-it',
    name: 'Gemma', 
    provider: 'Deep Learning {Semantic Study, wiki Search }',
    providerId: 'google'
   }, 
]
