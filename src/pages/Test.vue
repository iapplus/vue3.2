<template>
  <TestComponent foo="wangpengyu" :age="age"/>
  <button @click="test"></button>
</template>

<script setup>
import {ref} from "vue";

let age = ref(18)
import TestComponent from "@/components/TestComponent.vue";

function test(){
  age.value=100
}
</script>

<style scoped>

</style>
