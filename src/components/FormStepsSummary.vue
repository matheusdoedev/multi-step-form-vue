<script setup lang="ts">
import { useMultiStepFormDataStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

type FormStepsSummaryProps = {
  isMobile?: boolean
}

const formSteps = computed(() => [
  { order: 1, name: 'info', title: 'Your Info' },
  { order: 2, name: 'plan', title: 'Select Plan' },
  { order: 3, name: 'add-ons', title: 'Add-Ons' },
  { order: 4, name: 'summary', title: 'Summary' }
])
const store = useMultiStepFormDataStore()
const { currentStep } = storeToRefs(store)
const { isMobile = false } = defineProps<FormStepsSummaryProps>()
</script>

<template>
  <aside class="form-steps-status px-8 py-10" :class="{ 'form-steps-status--mobile': isMobile }">
    <ul class="step-numbers flex flex-col gap-y-8">
      <li
        class="step-numbers-item flex items-start gap-x-4"
        v-for="step in formSteps"
        :key="step.order"
      >
        <div
          class="step-number flex items-center justify-center rounded-full text-sm font-bold"
          :class="{ active: currentStep === step.order }"
        >
          {{ step.order }}
        </div>
        <div class="step-number-info flex flex-col">
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

  &--mobile {
    display: none;
  }

  @media (max-width: $lg) {
    display: none;

    &--mobile {
      display: flex;
      background: url('../assets/images/bg-sidebar-mobile.svg') no-repeat;
      background-size: cover;
      width: 100vw;
      height: 172px;
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 0;
      z-index: 1;

      .step-numbers {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
      }

      .step-number-info {
        display: none;
      }
    }
  }
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
