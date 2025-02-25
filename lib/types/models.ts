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
    provider: 'PATOOWORLD AI (TaskMaster Assistant)',
    providerId: 'google'
  },
]
