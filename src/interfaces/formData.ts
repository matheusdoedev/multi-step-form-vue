export type PlanType = 'montly' | 'yearly'

export interface FormDataDto {
  name: string
  email: string
  phone: string
  plan: string
  planType: PlanType
  addOns: string[]
}
