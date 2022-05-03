<template>
  <Navigate/>
  <ProductNavigation/>

<!--  <transition :duration="{ enter: 500, leave: 500 }"-->
<!--              enter-active-class="animate__animated animate__fadeIn"-->
<!--              leave-active-class="animate__animated animate__fadeOut">-->

<!--  </transition>-->
  <main class="container">
    <router-view/>
  </main>



</template>

<script setup>
import Navigate from "../components/Navigate.vue";
import ProductNavigation from "../components/ProductNavigation.vue";
</script>


