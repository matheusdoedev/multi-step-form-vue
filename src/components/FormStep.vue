<script setup lang="ts">
import BackButton from './BackButton.vue'
import SingleButton from './SingleButton.vue'

type StepProps = {
  title: string
  description: string
  onNext?: () => void
  isNextButtonDisabled?: boolean
  active?: boolean
  hideFooter?: boolean
  hideBackButton?: boolean
}

const {
  title,
  description,
  active = false,
  onNext,
  isNextButtonDisabled = false,
  hideFooter = false,
  hideBackButton = false
} = defineProps<StepProps>()
</script>

<template>
  <section v-if="active" class="form-step lg:pt-10 lg:pb-4 w-full">
    <h3 class="title font-bold pb-3 w-full">{{ title }}</h3>
    <p class="description pb-6 lg:pb-8 text-sm lg:text-base">{{ description }}</p>
    <slot></slot>
    <footer v-if="!hideFooter" class="footer flex justify-between w-full">
      <BackButton v-if="!hideBackButton" />
      <div v-if="hideBackButton"></div>
      <SingleButton type="button" :on-click="onNext" :disabled="isNextButtonDisabled"
        >Next Step</SingleButton
      >
    </footer>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/styles/index.scss';

.form-step {
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  height: 100%;
}

.title {
  font-size: 32px;
  color: $marine-blue;
}

.description {
  color: $cool-gray;
}

.footer {
  position: absolute;
  bottom: 0;
}

@media (max-width: $lg) {
  .title {
    font-size: 24px;
  }

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
