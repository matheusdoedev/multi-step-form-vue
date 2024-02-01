<script setup lang="ts">
import { FormStep } from '.'

type SelectPlanStepProps = {
  active?: boolean
}

const { active } = defineProps<SelectPlanStepProps>()
</script>

<template>
  <FormStep
    title="Select your plan"
    description="You have the option of monthly or yearly billing.."
    :active="active"
  >
    <form></form>
  </FormStep>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';
</style>
