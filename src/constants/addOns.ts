import type { AddOn } from '@/interfaces'

export const ADD_ONS_OPTIONS: AddOn[] = [
  {
    value: 'online-service',
    label: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10
  },
  {
    value: 'larger-storage',
    label: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20
  },
  {
    value: 'customizable-profile',
    label: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 3,
    yearlyPrice: 30
  }
]
