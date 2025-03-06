export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-1.5-pro-002',
    name: 'ATOLOG-PA',
    provider: 'PATOOWORLD AI',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'ATOLOG-AG',
    provider: 'PATOOWORLD AI',
    providerId: 'google'
  },
]
