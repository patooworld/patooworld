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
    provider: 'PATOOWORLD AI {Unified developers tool. Search, Research and write code like a pro based on choice}',
    providerId: 'google'
   },
   {
    id: 'deepseek-r1-distill-llama-70b',
    name: 'ELEVATION',
    provider: 'PATOOWORLD AI {Study Audience Network. Refine any Video, Audio and Image Content In-depth understanding of any subject}',
    providerId: 'groq'
   },
   {
    id: 'gemini-2.0-flash',
    name: '99PACE', 
    provider: 'PATOOWORLD AI {Sales Chatbot, Computer Vision, pattern recognition Speed and Efficiency}',
    providerId: 'google'
   },
]
