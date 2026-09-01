export interface ContactFormData {
  name: string
  email: string
  phone?: string
  location?: string
  family_size?: string
  dietary?: string
  plan_interest?: string
  preferred_contact?: 'phone' | 'email'
  source?: string
  message?: string
}

export interface PlanOption {
  id: string
  people: '1-2' | '3-4'
  meals: 3 | 4
  style: 'mix' | 'protein'
  priceSubscribe: number
  pricePayg: number
  label: string
}