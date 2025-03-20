export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
    {
    id: 'gemini-1.5-pro-002',
    name: 'PATOOWORLD',
    provider: 'PATOOWORLD AI {Deep Learning Unified developers tool. Search, Research and write code like a pro based on choice}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash',
    name: 'PATOOPACE', 
    provider: 'PATOOWORLD AI {Your Conversational Chatbot, KnowALL}',
    providerId: 'google'
   },
   {
    id: 'gemini-1.5-flash',
    name: 'ELEVATOR', 
    provider: 'PATOOWORLD AI{Small but mighty MLCV GenAI Model..}',
    providerId: 'google'
   },
]
