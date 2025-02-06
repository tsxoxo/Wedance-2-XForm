<template>
  <form>
    <template v-for='item in props.fields'>
      <div class="form-element">
        <label for="item.field">{{ item.field }} </label>
        <component :id="item.field" :value="props.modelValue[item.field]"
          :is="item.component ? item.component : 'input'" v-bind="omit(item, 'component')" />
      </div>
    </template>
    <!-- <component v-for='component in components' :value="props.modelvalue[component.field]" :is='component.tag' v-bind='attributes' /> -->
  </form>
</template>

<script setup>
const props = defineProps({
  modelValue: Object,
  fields: Object
})
const emit = defineEmits([ 'update:modelValue' ])
const omit = (object, ...property) => {
  const result = { ...object }
  property.forEach(property => (delete result[ property ]))

  return result
}
// Create internal state. initialize with myObject properties
// mb clone myObject?
// bind each of these state values to an input
// watch each of these and emit onChange
// mutate state in App.vue
// possibly look at other XArray solutions for implementation details

// fields question: split attributes and tag into distinct variables?
</script>
<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
