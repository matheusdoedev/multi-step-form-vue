import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { FormDataDto, PlanType } from '@/interfaces'

export const useMultiStepFormDataStore = defineStore('multiStepFormData', () => {
  const currentStep = ref(1)

  const formData = ref<FormDataDto>({
    name: '',
    email: '',
    phone: '',
    plan: '',
    planType: 'yearly',
    addOns: []
  })

  const changeFormData = (key: keyof FormDataDto) => (value: string & PlanType & string[]) => {
    formData.value[key] = value
  }

  function changeFormStep(newStep: number) {
    currentStep.value = newStep
  }

  return { currentStep, formData, changeFormStep, changeFormData }
})
