<script setup lang="ts">
import { InputTypeHTMLAttribute } from 'vue'

type InputProps = {
  name: string
  type?: InputTypeHTMLAttribute
  label?: string
  value?: unknown
  placeholder?: string
  onChange?: (value: unknown) => void
}

const handleChange = (event: Event) => {
  const value = (event.currentTarget as HTMLInputElement).value

  onChange && onChange(value)
}

const { name, label, value = '', type = 'text', onChange, placeholder } = defineProps<InputProps>()
</script>

<template>
  <div class="wrapper">
    <label v-if="label" :for="name" class="label">{{ label }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :value="value"
      class="input"
      @change="handleChange"
      :placeholder="placeholder"
    />
  </div>
</template>
