<script setup lang="ts">
import { computed } from 'vue'

import { PLANS_OPTIONS } from '@/constants'
import type { Plan } from '@/interfaces'

import FormStep from './FormStep.vue'
import { useMultiStepFormDataStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useMultiStepFormDataStore()
const { currentStep, formData } = storeToRefs(store)
const { changeFormStep } = store
const planOptions = computed(() => PLANS_OPTIONS)
const isMonthly = computed(() => {
  return formData.value.planType === 'montly'
})

function changePlan(planValue: Plan) {
  formData.value.plan = planValue
}

function changePlanType() {
  if (formData.value.planType === 'montly') {
    formData.value.planType = 'yearly'
    return
  }
  formData.value.planType = 'montly'
}

function handleNextStep() {
  changeFormStep(currentStep.value + 1)
}
</script>

<template>
  <FormStep
    title="Select your plan"
    description="You have the option of monthly or yearly billing."
    :active="currentStep === 2"
    :on-next="handleNextStep"
  >
    <ul class="flex flex-col lg:flex-row items-center gap-4 w-full mb-6 lg:mb-8">
      <li class="w-full" v-for="plan in planOptions" :key="plan.value">
        <button
          class="plan-option flex gap-x-3.5 lg:flex-col rounded-lg p-4 lg:py-5 lg:px-4 text-left w-full"
          :class="{ selected: formData.plan === plan.value }"
          @click="() => changePlan(plan.value)"
        >
          <img class="plan-option__image lg:mb-10" :src="plan.icon" :alt="plan.label" />
          <div class="flex flex-col">
            <h3 class="plan-option__title font-medium text-base mb-1 lg:mb-2">{{ plan.label }}</h3>
            <span v-if="isMonthly" class="plan-option__value text-sm"
              >${{ plan.monthlyValue }}/mo</span
            >
            <span v-if="!isMonthly" class="plan-option__value text-sm"
              >${{ plan.yearlyValue }}/yr</span
            >
            <span v-if="!isMonthly" class="plan-option__yearly-advantage mt-1 lg:mt-2 text-xs"
              >2 months free</span
            >
          </div>
        </button>
      </li>
    </ul>
    <section class="plan-type-selector w-full rounded-lg py-3.5 flex justify-center items-center">
      <span
        class="plan-type-selector__option font-medium text-sm mr-6"
        :class="{ selected: isMonthly }"
        >Monthly</span
      >
      <button class="plan-type-selector__toggle" aria-label="Plan Type" @click="changePlanType">
        <div
          class="plan-type-selector__toggle__icon rounded-full"
          :class="{ active: !isMonthly }"
        ></div>
      </button>
      <span
        class="plan-type-selector__option font-medium text-sm ml-6"
        :class="{ selected: !isMonthly }"
        >Yearly</span
      >
    </section>
  </FormStep>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.plan-option {
  border: 1px solid $light-gray;
  transition: 0.3s;

  &__image {
    width: 40px;
    height: 40px;
  }

  &__title {
    color: $marine-blue;
  }

  &__value {
    color: $cool-gray;
  }

  &__yearly-advantage {
    color: $marine-blue;
  }

  &:hover,
  &.selected {
    border-color: $purplish-blue;
    background: $alabaster;
    transition: 0.3s;
  }
}

.plan-type-selector {
  background: $alabaster;

  &__option {
    color: $cool-gray;
    transition: 0.3s;

    &.selected {
      color: $marine-blue;
      transition: 0.3s;
    }
  }

  &__toggle {
    width: 38px;
    height: 20px;
    border-radius: 10px;
    transition: 0.3s;
    background: $marine-blue;
    position: relative;

    &__icon {
      width: 12px;
      height: 12px;
      background: $white;

      position: absolute;
      top: 4px;
      left: 4px;
      transition: 0.3s;

      &.active {
        left: 22px;
        transition: 0.3s;
      }
    }
  }
}
</style>
