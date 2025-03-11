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
    name: 'PATOOWORLD 99PACE',
    provider: 'PATOOWORLD AI {Study Refine any Video, Audio and Image Content In-depth understanding of any subject}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'PATOOWORLD ELEVATION', 
    provider: 'PATOOWORLD AI {Deep Learning ,Threats Detector Computer Vision, pattern recognitions and Efficiency}',
    providerId: 'google'
   },
]
