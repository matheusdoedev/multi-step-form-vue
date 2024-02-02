<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { FormStepsSummary, PersonalInfoStep, SelectPlanStep } from '@/components'
import { useMultiStepFormDataStore } from '@/stores'

const store = useMultiStepFormDataStore()
const { currentStep } = storeToRefs(store)
</script>

<template>
  <main class="wrapper">
    <div class="container flex justify-center w-full">
      <section class="content p-4 w-full">
        <FormStepsSummary :current-step="currentStep" />
        <section class="steps">
          <PersonalInfoStep :active="currentStep === 1" />
          <SelectPlanStep :active="currentStep === 2" />
        </section>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.wrapper {
  background: $magnolia;
  min-height: 100vh;
  padding-top: 96px;
}

.content {
  max-width: 940px;
  height: 600px;
  background: $white;
  border-radius: 10px;
  box-shadow: 0 25px 40px -20px #00000022;

  display: grid;
  grid-template-columns: 3.7fr 8.3fr;
  align-items: start;
  gap: 16px;
}

.steps {
  height: 100%;
}
</style>
