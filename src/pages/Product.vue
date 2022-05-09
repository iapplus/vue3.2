<template>
  <div style="background-color:rgb(21,22,33)">
    <ProductNavigation/>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script setup>
import ProductNavigation from "../components/ProductNavigation.vue";
</script>


