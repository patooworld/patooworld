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
    id: 'deepseek-r1-distill-llama-70b',
    name: '99PACE',
    provider: 'PATOOWORLD AI {Students Elevator. Generate, Reform, and Transform any Video, Audio and Image Content In-depth understanding of any subject}',
    providerId: 'groq'
   },
   {
    id: 'gemini-2.0-flash',
    name: 'PatooAssist', 
    provider: 'PATOOWORLD PA {TaskMaster}',
    providerId: 'google'
   },
]
