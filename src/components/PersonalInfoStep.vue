<script setup lang="ts">
import { FormStep, TextField } from '.'
</script>

<template>
  <FormStep
    title="Personal Info"
    description="Please provide your name, email address, and phone number."
  >
    <form>
      <TextField name="name" label="Name" />
      <TextField type="email" name="email" label="Email Address" />
      <TextField name="phone" label="Phone Number" placeholder="e.g. +1 234 567 890" />
    </form>
  </FormStep>
</template>
