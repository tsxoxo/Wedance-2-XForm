<template>
  <form>
    <template v-for='item in props.fields'>
      <component
        :value="props.modelValue[item.field]"
        :is="item.component ? item.component : 'input'"
        v-bind="omit(item, 'field', 'component')"
        @input="event => emitUpdate(item.field, event.target.value)"
      />
    </template>
  </form>
</template>

<script setup>
const props = defineProps({
  modelValue: Object,
  fields: Object
})
const emit = defineEmits([ 'update:modelValue' ])
const omit = (object, ...properties) => {
  const result = { ...object }

  properties.forEach(property => {
    delete result[ property ]
  })

  return result
}
const emitUpdate = (key, newValue) => {
  emit('update:modelValue', { ...props.modelValue, [ key ]: newValue })
}
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
