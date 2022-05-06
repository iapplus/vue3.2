<template>
  <h1>哈哈HelloWorld {{msg1}}{{age1}}</h1>
</template>

<script setup>

import {defineExpose, defineProps, ref} from "vue";

const age = ref(111)
const msg = ref("-------------")
defineExpose({msg, age})

defineProps({
  msg1:{
    type:String,
    default:""
  },
  age1:{
    type:Number,
    default:0
  }
})


</script>

<style scoped>

</style>
