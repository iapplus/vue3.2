<template>
  <section class="wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0s" style="background-color: rebeccapurple;height: 400px;width: 100%">1sadfsdfdasf</section>
  <section class="wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0s" style="background-color: rebeccapurple;height: 400px;width: 100%">1sadfsdfdasf</section>
  <section class="wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0s" style="background-color: rebeccapurple;height: 400px;width: 100%">1sadfsdfdasf</section>
  <section class="wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0s" style="background-color: rebeccapurple;height: 400px;width: 100%">1sadfsdfdasf</section>
  <section class="wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0s" style="background-color: rebeccapurple;height: 400px;width: 100%">1sadfsdfdasf</section>
  <section class="wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0s" style="background-color: rebeccapurple;height: 400px;width: 100%">1sadfsdfdasf</section>

</template>

<script setup>
import WOW from 'wow.js'

import {onMounted} from "vue";
import _ from 'lodash';

const range = _.range(1, 3); // [1, 2]
const random = _.random(0, 5); // an integer between 0 and 5


window.addEventListener('scroll',_.throttle(()=>{
  console.log(1111)
}, 1000))


onMounted(() => {
  let wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animate__animated"
  })
  wow.init()
})
</script>

<style scoped>

</style>
