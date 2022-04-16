<template>
  {{ isNamePresent }}
  {{ name1 }}
  {{ name }}
  <button @click="a">点击
  </button>
</template>

<script setup>
import {computed, ref, defineExpose, defineProps} from "vue";

const name = ref('abc')
const isNamePresent = computed(() => name.value + 10000)//计算属性

const dog = "123456789"
defineExpose({
  dog
})


defineProps({
  name1: {
    type: String,
    default: ''
  }
})

function a() {
  digui(0)
}


function digui(x) {
  console.log(x)
  x += 1
  if (x <= 100) {
    digui(x)
  }
}
</script>

<style scoped>

</style>
