<script setup lang="ts">
import PersonalInfoStep from '@/components/PersonalInfoStep.vue'

const FORM_STEPS = [
  { order: 1, name: 'info', title: 'Your Info' },
  { order: 2, name: 'plan', title: 'Select Plan' },
  { order: 3, name: 'add-ons', title: 'Add-Ons' },
  { order: 4, name: 'summary', title: 'Summary' }
]
</script>

<template>
  <main>
    <div class="container">
      <aside>
        <ul>
          <li v-for="step in FORM_STEPS" :key="step.order">
            <div>{{ step.order }}</div>
            <div>
              <span>Step {{ step.order }}</span>
              <h3>{{ step.title }}</h3>
            </div>
          </li>
        </ul>
      </aside>
      <section>
        <PersonalInfoStep />
        <footer>
          <button>Go Back</button>
          <button>Next Step</button>
        </footer>
      </section>
    </div>
  </main>
</template>
