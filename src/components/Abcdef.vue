<template>
  <div>
    -{{a}}-{{b}}-
    <slot name="aa"></slot>
    <slot name="bb"></slot>
  </div>
</template>

<script setup>
defineProps(['a','b'])
</script>

<style scoped>

</style>
