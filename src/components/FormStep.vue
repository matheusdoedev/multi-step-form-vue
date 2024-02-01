<script setup lang="ts">
type StepProps = {
  title: string
  description: string
}

const { title, description } = defineProps<StepProps>()
</script>

<template>
  <section>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <slot></slot>
  </section>
</template>
