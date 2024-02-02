<script setup lang="ts">
import { useMultiStepFormDataStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const formSteps = computed(() => [
  { order: 1, name: 'info', title: 'Your Info' },
  { order: 2, name: 'plan', title: 'Select Plan' },
  { order: 3, name: 'add-ons', title: 'Add-Ons' },
  { order: 4, name: 'summary', title: 'Summary' }
])
const store = useMultiStepFormDataStore()
const { currentStep } = storeToRefs(store)
</script>

<template>
  <aside class="form-steps-status px-8 py-10">
    <ul class="flex flex-col gap-y-8">
      <li class="flex items-start gap-x-4" v-for="step in formSteps" :key="step.order">
        <div
          class="step-number flex items-center justify-center rounded-full text-sm font-bold"
          :class="{ active: currentStep === step.order }"
        >
          {{ step.order }}
        </div>
        <div class="flex flex-col">
          <span class="step-description text-xs uppercase mb-1">Step {{ step.order }}</span>
          <h3 class="step-label uppercase font-bold">{{ step.title }}</h3>
        </div>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
@import '../assets/styles/index.scss';

.form-steps-status {
  background: url('../assets/images/bg-sidebar-desktop.svg') no-repeat;
  background-position: center bottom;
  border-radius: 10px;
  height: 100%;
}

.step-number {
  border: 1px solid $white;
  width: 33px;
  height: 33px;
  color: $white;

  &.active {
    background: $light-blue;
    border-color: $light-blue;
    color: $marine-blue;
  }
}

.step-description {
  color: $light-blue;
}

.step-label {
  color: $white;
  letter-spacing: 1px;
}
</style>
