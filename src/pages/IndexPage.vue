<template>
  IndexPage {{ name }}
  <button @click="change1">
    点击修改
  </button>

  <button>
    点击修改
  </button>
</template>

<script setup>
import {useMainStore} from "../store/main";
import {inject, provide} from "vue";
import {storeToRefs} from "pinia";


// console.log('store',useMainStore().name)

const {name} = storeToRefs(useMainStore())
console.log('store', name.value)
name.value = '哈哈哈哈'
console.log('store', name.value)

const name1 = inject("name")

const change1 = () => {
  name1.value = "🌹"
}
// export default {
//   name: "IndexPage",
//   components: {Navigation}
// }
</script>

<style scoped>

</style>
