<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue'

type InputProps = {
  name: string
  type?: InputTypeHTMLAttribute
  label?: string
  value?: unknown
  placeholder?: string
  onChange?: (value: unknown) => void
  error?: string
}

const handleChange = (event: Event) => {
  const value = (event.currentTarget as HTMLInputElement).value

  onChange && onChange(value)
}

const {
  name,
  label,
  value = '',
  type = 'text',
  onChange,
  placeholder,
  error
} = defineProps<InputProps>()
</script>

<template>
  <div class="flex flex-col gap-y-1 lg:gap-y-2 mb-4 lg:mb-6">
    <div class="flex items-center justify-between">
      <label v-if="label" :for="name" class="label text-xs lg:text-sm">{{ label }}</label>
      <span v-if="error" class="error-text font-bold text-xs">{{ error }}</span>
    </div>
    <input
      :type="type"
      :id="name"
      :name="name"
      :value="value"
      class="input px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg"
      :class="{ error: !!error }"
      @change="handleChange"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.label {
  color: $marine-blue;
}

.input {
  border: 1px solid $light-gray;

  &:focus {
    outline: none;
    border-color: $purplish-blue;
  }

  &.error {
    border-color: $strawberry-red;
  }
}

.error-text {
  color: $strawberry-red;
}
</style>
