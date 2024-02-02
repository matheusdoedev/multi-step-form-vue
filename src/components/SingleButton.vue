<script setup lang="ts">
type SingleButtonProps = {
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const { onClick, type = 'button', disabled = false } = defineProps<SingleButtonProps>()
</script>

<template>
  <button
    :type="type"
    class="button-wrapper px-6 py-3 rounded-lg font-medium text-base"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.button-wrapper {
  background: $marine-blue !important;
  color: $white !important;
  transition: 0.3s;

  &:hover {
    background: #164a8a;
    transition: 0.3s;
  }

  &:disabled {
    background: $light-gray !important;
    color: $cool-gray !important;
  }
}
</style>
