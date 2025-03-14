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
    provider: 'Deep Learning {Study Research, Search and write code, poem and complete tasks like a pro based on choice}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash',
    name: 'PATOOPACE',
    provider: 'Deep Learning {Your Conversational Chatbot. Reform, Transfrom and Generate Image. choice for IoT }',
    providerId: 'google'
   },
    {
    id: 'gemini-2.0-flash-lite-001',
    name: '99PACE',
    provider: 'Deep Learning {ELITE FLOW Stratagies is based on Choice. Best in findings, Refining, Redefining and Enhancing.}',
    providerId: 'google'
   },
   {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'CLOUDINPACE', 
    provider: 'DeepMind {Deep Dive In-depth understanding of any subject from Computer Vision to Cybersecurity etc..}',
    providerId: 'google'
   },
]
