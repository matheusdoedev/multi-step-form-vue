<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useMultiStepFormDataStore } from '@/stores'

import TextField from './TextField.vue'
import FormStep from './FormStep.vue'

// @ts-ignore
const store = useMultiStepFormDataStore()
const { formData, currentStep } = storeToRefs(store)
const { changeFormData, changeFormStep } = store

function handleSubmit() {
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
  >
    <form>
      <TextField
        name="name"
        label="Name"
        placeholder="e.g. John Doe"
        :value="formData.name"
        :on-change="changeFormData('name')"
      />
      <TextField
        type="email"
        name="email"
        label="Email Address"
        placeholder="e.g. johndoe@mail.com"
        :value="formData.email"
        :on-change="changeFormData('email')"
      />
      <TextField
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        :value="formData.phone"
        :on-change="changeFormData('phone')"
      />
    </form>
  </FormStep>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.footer {
  margin-top: 92px;
}
</style>
