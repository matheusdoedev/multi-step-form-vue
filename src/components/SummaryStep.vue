<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { ADD_ONS_OPTIONS, PLANS_OPTIONS } from '@/constants'
import { useMultiStepFormDataStore } from '@/stores'
import { capitalize } from '@/utils'

import FormStep from './FormStep.vue'
import BackButton from './BackButton.vue'
import SingleButton from './SingleButton.vue'

const store = useMultiStepFormDataStore()
const { currentStep, formData } = storeToRefs(store)
const { changeFormStep } = store
const isMonthlyPlan = computed(() => {
  return formData.value.planType === 'montly'
})
const planData = computed(() => {
  const plan = PLANS_OPTIONS.find((planOption) => planOption.value === formData.value.plan)
  const planPrice = isMonthlyPlan.value ? plan?.monthlyValue : plan?.yearlyValue

  return {
    selectedPlanText: `${plan?.label} (${capitalize(formData.value.planType)})`,
    planPriceText: isMonthlyPlan.value ? `$${planPrice}/mo` : `$${planPrice}/yr`,
    planPrice: planPrice ?? 0
  }
})
const selectedAddOns = computed(() => {
  const selectedAddOns = ADD_ONS_OPTIONS.filter((addOnOption) =>
    formData.value.addOns.includes(addOnOption.value)
  )

  return selectedAddOns.map((addOnOption) => ({
    ...addOnOption,
    priceText: isMonthlyPlan.value
      ? `+$${addOnOption.monthlyPrice}/mo`
      : `+$${addOnOption.yearlyPrice}/yr`,
    price: isMonthlyPlan.value ? addOnOption.monthlyPrice : addOnOption.yearlyPrice
  }))
})
const totalData = computed(() => {
  const totalPrice =
    planData.value.planPrice +
    selectedAddOns.value.reduce((currentValue, { price }) => {
      return currentValue + price
    }, 0)

  return {
    label: isMonthlyPlan.value ? 'Total (per month)' : 'Total (per year)',
    priceText: isMonthlyPlan.value ? `$${totalPrice}/mo` : `$${totalPrice}/yr`
  }
})

function handleConclude() {
  changeFormStep(currentStep.value + 1)
}

function handleGoToSelectPlan() {
  changeFormStep(2)
}
</script>

<template>
  <FormStep
    title="Finishing up"
    description="Double-check everything looks OK before confirming."
    :active="currentStep === 4"
    :hide-footer="true"
  >
    <section class="flex flex-col gap-6">
      <section class="summary-data w-full flex flex-col rounded-lg p-4 lg:py-4 lg:px-6">
        <div class="w-full flex items-center justify-between">
          <div class="flex flex-col text-left gap-1 lg:gap-2">
            <h3 class="plan-label font-medium text-sm lg:text-base">
              {{ planData.selectedPlanText }}
            </h3>
            <button class="change-button text-sm underline text-left" @click="handleGoToSelectPlan">
              Change
            </button>
          </div>
          <span class="plan-price text-sm lg:text-base font-bold">{{
            planData.planPriceText
          }}</span>
        </div>
        <div class="separator w-full my-3 lg:mt-6 lg:mb-4" />
        <ul class="w-full flex flex-col gap-3 lg:gap-4">
          <li
            v-for="addOn in selectedAddOns"
            class="flex items-center justify-between w-full"
            :key="addOn.value"
          >
            <span class="add-on-label text-sm">{{ addOn.label }}</span>
            <span class="add-on-price text-sm">{{ addOn.priceText }}</span>
          </li>
        </ul>
      </section>
      <section class="summary__total flex items-center justify-between px-6">
        <span class="total-label text-sm">{{ totalData.label }}</span>
        <span class="total-price font-bold text-base lg:text-xl">{{ totalData.priceText }}</span>
      </section>
    </section>
    <footer class="footer flex justify-between w-full">
      <BackButton />
      <SingleButton
        type="button"
        @click="handleConclude"
        :style="'background-color: hsl(243, 100%, 62%) !important'"
        >Confirm</SingleButton
      >
    </footer>
  </FormStep>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.summary-data {
  background: $alabaster;
}

.plan-label {
  color: $marine-blue;
}

.change-button {
  color: $cool-gray;
}

.separator {
  height: 1px;
  background: $cool-gray;
  opacity: 0.2;
}

.plan-price {
  color: $marine-blue;
}

.add-on-label {
  color: $cool-gray;
}

.add-on-price {
  color: $marine-blue;
}

.total-label {
  color: $cool-gray;
}

.total-price {
  color: $purplish-blue;
}

.footer {
  position: absolute;
  bottom: 0;
}

@media (max-width: $lg) {
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: $white;
    padding: 16px;
    box-shadow: 0 25px 40px -20px #00000011;
  }
}
</style>
