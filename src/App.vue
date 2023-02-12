<template>
  <Navigate/>
<!--  <router-view v-slot="{ Component }">-->
<!--    <transition name="fade" mode="out-in">-->
<!--      <component :is="Component"/>-->
<!--    </transition>-->
<!--  </router-view>-->
  <router-view>
  </router-view>
</template>

<script setup>
import Navigate from "./components/Navigate.vue";
</script>

<style>
@import "assets/css/reset.css";
/*.fade-enter-active,*/
/*.fade-leave-active {*/
/*  transition: opacity 0.2s ease-in;*/
/*}*/

/*.fade-enter-from,*/
/*.fade-leave-to {*/
/*  opacity: 0;*/
/*}*/

</style>
