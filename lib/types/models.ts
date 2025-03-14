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
    provider: 'Deep Learning {Study Research and write code, poem and complete tasks like a pro based on choice}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash',
    name: 'ELEVATION',
    provider: 'Deep Learning {Generate, Reform and Transfrom any Video, Audio and Image with speed of Light}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: '99PACE', 
    provider: 'DeepMind {Deep Dive In-depth understanding of any subject from Computer Vision to Cybersecurity etc..}',
    providerId: 'google'
   },
]
