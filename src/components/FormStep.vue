<script setup lang="ts">
import BackButton from './BackButton.vue'
import SingleButton from './SingleButton.vue'

type StepProps = {
  title: string
  description: string
  active?: boolean
  onNext: () => void
}

const { title, description, active = false, onNext } = defineProps<StepProps>()
</script>

<template>
  <section v-if="active" class="form-step pt-10 pb-4 w-full">
    <h3 class="title font-bold pb-3">{{ title }}</h3>
    <p class="description pb-8 text-base">{{ description }}</p>
    <slot></slot>
    <footer class="footer flex justify-between w-full">
      <BackButton />
      <SingleButton type="submit" @click="onNext">Next Step</SingleButton>
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
</style>
