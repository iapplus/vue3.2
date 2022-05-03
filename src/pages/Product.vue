<template>
  <Navigate/>
  <div class="container">
    <main class="container">
      <ProductNavigation/>
      <router-view></router-view>
    </main>
  </div>

</template>

<script setup>
import Navigate from "../components/Navigate.vue";
import ProductNavigation from "../components/ProductNavigation.vue";
</script>


