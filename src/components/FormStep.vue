<script setup lang="ts">
type StepProps = {
  title: string
  description: string
  active?: boolean
}

const { title, description, active = false } = defineProps<StepProps>()
</script>

<template>
  <section v-if="active" class="form-step pt-10 pb-4 w-full">
    <h3 class="title font-bold pb-3">{{ title }}</h3>
    <p class="description pb-8 text-base">{{ description }}</p>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/styles/index.scss';

.form-step {
  max-width: 450px;
  margin: 0 auto;
}

.title {
  font-size: 32px;
  color: $marine-blue;
}

.description {
  color: $cool-gray;
}
</style>
