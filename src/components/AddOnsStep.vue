<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import { ADD_ONS_OPTIONS } from '@/constants'
import { useMultiStepFormDataStore } from '@/stores'

import FormStep from './FormStep.vue'

const store = useMultiStepFormDataStore()
const { currentStep, formData } = storeToRefs(store)
const { changeFormStep } = store
const addOnsOptions = computed(() => ADD_ONS_OPTIONS)
const isButtonDisabled = computed(() => {
  return formData.value.addOns.length === 0
})

function handleNextStep() {
  changeFormStep(currentStep.value + 1)
}

function handleChangeAddOns(value: string) {
  if (!formData.value.addOns.includes(value)) {
    formData.value.addOns.push(value)
    return
  }
  formData.value.addOns.splice(formData.value.addOns.indexOf(value), 1)
}
</script>

<template>
  <FormStep
    title="Pick add-ons"
    description="Add-ons help enhance your gaming experience."
    :active="currentStep === 3"
    :on-next="handleNextStep"
    :is-next-button-disabled="isButtonDisabled"
  >
    <ul class="flex flex-col gap-4">
      <li class="w-full" v-for="addOn in addOnsOptions" :key="addOn.value">
        <button
          class="add-on-option w-full flex justify-between items-center py-4 px-6 rounded-lg"
          :class="{ selected: formData.addOns.includes(addOn.value) }"
          @click="() => handleChangeAddOns(addOn.value)"
        >
          <div class="flex items-center gap-6">
            <div
              class="add-on-option__checkbox rounded flex items-center justify-center"
              :class="{ selected: formData.addOns.includes(addOn.value) }"
            >
              <img src="../assets/images/icon-checkmark.svg" alt="Checkmark" />
            </div>
            <div class="flex flex-col gap-2 text-left">
              <h3 class="add-on-option__title font-medium text-base">{{ addOn.label }}</h3>
              <span class="add-on-option__description text-sm">{{ addOn.description }}</span>
            </div>
          </div>
          <span v-if="formData.planType === 'montly'" class="add-on-option__price text-sm"
            >${{ addOn.monthlyPrice }}/mo</span
          >
          <span v-if="formData.planType === 'yearly'" class="add-on-option__price"
            >${{ addOn.yearlyPrice }}/yr</span
          >
        </button>
      </li>
    </ul>
  </FormStep>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.add-on-option {
  border: 1px solid $light-gray;
  transition: 0.3s;

  &__title {
    color: $marine-blue;
  }

  &__description {
    color: $cool-gray;
  }

  &__price {
    color: $purplish-blue;
  }

  &__checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid $light-gray;
    transition: 0.3s;

    &.selected {
      border-color: $purplish-blue;
      background: $purplish-blue;
      transition: 0.3s;
    }
  }

  &:hover,
  &.selected {
    border-color: $purplish-blue;
    background: $alabaster;
    transition: 0.3s;
  }
}
</style>
