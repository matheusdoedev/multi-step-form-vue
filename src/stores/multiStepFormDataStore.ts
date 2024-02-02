import { defineStore } from 'pinia'
import { ref } from 'vue'

import { EMAIL_REGEX } from '@/constants'
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

  const errors = ref({
    name: '',
    email: '',
    phone: ''
  })

  const changeFormData = (key: keyof FormDataDto) => (value: unknown) => {
    formData.value[key] = value as string & PlanType & Plan & string[]

    validators(key, value)
  }

  function validators(key: keyof FormDataDto, value: unknown) {
    switch (key) {
      case 'email':
        if (!(value as string).match(EMAIL_REGEX)) errors.value.email = 'Email is invalid.'
        else errors.value.email = ''
        break
      case 'phone':
        if (!value) errors.value.phone = 'Phone is required.'
        else errors.value.phone = ''
        break
      case 'name':
      default:
        if (!value) errors.value.name = 'Name is required.'
        else errors.value.name = ''
        break
    }
  }

  function changeFormStep(newStep: number) {
    currentStep.value = newStep
  }

  return { currentStep, formData, changeFormStep, changeFormData, errors }
})
