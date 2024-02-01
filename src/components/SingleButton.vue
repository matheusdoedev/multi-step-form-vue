<script setup lang="ts">
type SingleButtonProps = {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const { onClick, type = 'button', disabled = false } = defineProps<SingleButtonProps>()
</script>

<template>
  <button
    :type="type"
    class="button px-6 py-3 rounded-lg font-medium text-base"
    @click="onClick"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.button {
  background: $marine-blue;
  color: $white;
  transition: 0.3s;

  &:hover {
    background: #164a8a;
    transition: 0.3s;
  }

  &:disabled {
    background: $light-gray;
    color: $cool-gray;
  }
}
</style>
