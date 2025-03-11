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
    provider: 'PATOOWORLD AI {Deep Learning developers tool. Search, Research and write code like a pro based on choice}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash',
    name: '99PACE',
    provider: 'PATOOWORLD AI2 {Generate, Reform and Transfrom any Video, Audio and Image with speed of Light}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'ELEVATION', 
    provider: 'PATOOWORLD CV {Deep Learning In-depth understanding of any subject from Computer Vision.}',
    providerId: 'google'
   },
]
