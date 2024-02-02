<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useMultiStepFormDataStore } from '@/stores'

const store = useMultiStepFormDataStore()
const { currentStep } = storeToRefs(store)
const { changeFormStep } = store

function handleBack() {
  changeFormStep(currentStep.value - 1)
}
</script>

<template>
  <button type="button" class="back-button text-base font-medium" @click="handleBack">
    Go Back
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.back-button {
  color: $cool-gray;
  transition: 0.3s;

  &:hover {
    color: $marine-blue;
    transition: 0.3s;
  }
}
</style>
