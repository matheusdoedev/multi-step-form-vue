export type Plan = 'arcade' | 'advanced' | 'pro'

export type PlanType = 'montly' | 'yearly'

export interface PlanOption {
  icon: string
  label: string
  monthlyValue: number
  yearlyValue: number
  value: Plan
}
