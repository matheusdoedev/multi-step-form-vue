<script setup lang="ts">
import {
  AddOnStep,
  ConclusionStep,
  FormStepsSummary,
  PersonalInfoStep,
  SelectPlanStep,
  SummaryStep
} from '@/components'
</script>

<template>
  <main class="wrapper">
    <FormStepsSummary :is-mobile="true" />
    <div class="container flex justify-center w-full">
      <section class="content py-8 px-6 lg:p-4 w-full">
        <FormStepsSummary />
        <section class="steps w-full">
          <PersonalInfoStep />
          <SelectPlanStep />
          <AddOnStep />
          <SummaryStep />
          <ConclusionStep />
        </section>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.wrapper {
  background: $magnolia;
  min-height: 100vh;
  padding-top: 96px;
}

.content {
  max-width: 940px;
  height: 600px;
  background: $white;
  border-radius: 10px;
  box-shadow: 0 25px 40px -20px #00000022;

  display: grid;
  grid-template-columns: 3.7fr 8.3fr;
  align-items: start;
  gap: 16px;
}

.steps {
  height: 100%;
}

@media (max-width: $lg) {
  .wrapper {
    padding-bottom: 128px;
  }

  .content {
    z-index: 2;
    margin-top: 11px;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .steps {
    max-width: 360px;
  }
}
</style>
