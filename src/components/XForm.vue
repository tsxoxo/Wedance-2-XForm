<template>
  <form>
    <component v-for='component in components' :is='component.tag' v-bind='attributes' />
  </form>
</template>

<script setup>
const props = defineProps({
  fields: Object
})
// Create internal state. initialize with myObject properties
// mb clone myObject?
// bind each of these state values to an input
// watch each of these and emit onChange
// mutate state in App.vue
// possibly look at other XArray solutions for implementation details

// fields question: split attributes and tag into distinct variables?
const fie
</script>
