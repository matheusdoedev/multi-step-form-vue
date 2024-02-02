<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useMultiStepFormDataStore } from '@/stores'

import TextField from './TextField.vue'
import FormStep from './FormStep.vue'

// @ts-ignore
const store = useMultiStepFormDataStore()
const { formData, currentStep, errors } = storeToRefs(store)
const { changeFormData, changeFormStep } = store
const isButtonDisabled = computed(() => {
  const { name, email, phone } = formData.value
  const isFieldsEmpty = !name.length || !email.length || !phone.length
  const isFieldsWithError =
    !!errors.value.name.length || !!errors.value.email.length || !!errors.value.phone.length

  return isFieldsEmpty || isFieldsWithError
})

function handleSubmit() {
  if (isButtonDisabled.value) return

  changeFormStep(2)
}

onMounted(() => {
  const nameInput = document.querySelector("[name='name']") as HTMLInputElement

  nameInput.focus()
})
</script>

<template>
  <FormStep
    title="Personal Info"
    description="Please provide your name, email address, and phone number."
    :active="currentStep === 1"
    :on-next="() => handleSubmit()"
    :is-next-button-disabled="isButtonDisabled"
    :hide-back-button="true"
  >
    <form>
      <TextField
        name="name"
        label="Name*"
        placeholder="e.g. John Doe"
        :value="formData.name"
        :on-change="changeFormData('name')"
        :error="errors.name"
      />
      <TextField
        type="email"
        name="email"
        label="Email Address*"
        placeholder="e.g. johndoe@mail.com"
        :value="formData.email"
        :on-change="changeFormData('email')"
        :error="errors.email"
      />
      <TextField
        name="phone"
        label="Phone Number*"
        placeholder="e.g. +1 234 567 890"
        :value="formData.phone"
        :on-change="changeFormData('phone')"
        :error="errors.phone"
      />
      <span class="required-advise text-xs text-left">* Those fields are required.</span>
    </form>
  </FormStep>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.footer {
  margin-top: 92px;
}

.required-advise {
  color: $cool-gray;
}
</style>
