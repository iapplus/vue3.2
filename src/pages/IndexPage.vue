<template>
  IndexPage {{name}}
  <button @click = "change1">
    点击修改
  </button>

  <button>
    点击修改
  </button>
</template>

<script setup>
import {inject, provide} from "vue";

const name = inject("name")

const change1 = ()=>{
  name.value = "🌹"
}
// export default {
//   name: "IndexPage",
//   components: {Navigation}
// }
</script>

<style scoped>

</style>
