import arcadeIcon from '@/assets/images/icon-arcade.svg'
import advancedIcon from '@/assets/images/icon-advanced.svg'
import proIcon from '@/assets/images/icon-pro.svg'
import type { PlanOption } from '@/interfaces'

export const PLANS_OPTIONS: PlanOption[] = [
  {
    icon: arcadeIcon,
    label: 'Arcade',
    monthlyValue: 9.0,
    yearlyValue: 90.0,
    value: 'arcade'
  },
  {
    icon: advancedIcon,
    label: 'Advanced',
    monthlyValue: 12.0,
    yearlyValue: 120.0,
    value: 'advanced'
  },
  {
    icon: proIcon,
    label: 'Pro',
    monthlyValue: 15.0,
    yearlyValue: 150.0,
    value: 'pro'
  }
]
