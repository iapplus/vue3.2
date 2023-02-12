<template>
  {{props.foo}}
  年龄:{{props.age}}
</template>

<script setup>
const props = defineProps({
  foo: String,
  age:Number
})
</script>

<style scoped>

</style>
