<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useMultiStepFormDataStore } from '@/stores'

const store = useMultiStepFormDataStore()
const { currentStep } = storeToRefs(store)
</script>

<template>
  <section
    v-if="currentStep === 5"
    class="conclude flex flex-col items-center justify-center text-center w-full"
  >
    <img class="mb-6 lg:mb-8" src="../assets/images/icon-thank-you.svg" alt="Thank you" />
    <h2 class="title font-bold mb-2.5 lg:mb-3.5">Thank you!</h2>
    <p class="text text-base">
      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
      need support, please feel free to email us at support@loremgaming.com.
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.conclude {
  height: 100%;
}

.title {
  font-size: 32px;
  color: $marine-blue;
}

.text {
  color: $cool-gray;
}

@media (max-width: $lg) {
  .title {
    font-size: 24px;
  }
}
</style>
