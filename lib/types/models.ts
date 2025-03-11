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
    provider: 'PATOOWORLD AI2 {Data analysis, Sales Chatbot, Marketing Vision, pattern recognition Speed and Efficiency}',
    providerId: 'google'
  },
  {
    id: 'deepseek-r1-distill-llama-70b',
    name: '99PACE',
    provider: 'PATOOWORLD ELVATION {Study and Refine any Content In-depth understanding of any subject}',
    providerId: 'groq'
  },
]
