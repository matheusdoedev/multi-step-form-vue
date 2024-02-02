import type { Plan, PlanType } from '.'

export interface FormDataDto {
  name: string
  email: string
  phone: string
  plan: Plan
  planType: PlanType
  addOns: string[]
}
