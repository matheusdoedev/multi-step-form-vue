import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { FormDataDto, Plan, PlanType } from '@/interfaces'

export const useMultiStepFormDataStore = defineStore('multiStepFormData', () => {
  const currentStep = ref(1)

  const formData = ref<FormDataDto>({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    planType: 'montly',
    addOns: []
  })

  const changeFormData = (key: keyof FormDataDto) => (value: unknown) => {
    formData.value[key] = value as string & PlanType & Plan & string[]
  }

  function changeFormStep(newStep: number) {
    currentStep.value = newStep
  }

  return { currentStep, formData, changeFormStep, changeFormData }
})
