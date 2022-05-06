<template>
  <div style="background-color: #f5f5f7">
    <div class="row col-12 col-md-6 m-auto justify-content-center">
      <div v-for="(item,index) in products" class="col-3 align-items-center py-2"
           style="cursor: pointer;color: black">
        <router-link :to="item.path" active-class="router-link-active" class="router-link-normal">
          <div class="row align-items-center">
            <div class="col-12 text-center">
              <img style="width: 36px" :src="item.image_url" alt="">
            </div>
            <span class="col-12 text-center my-1">{{ item.title }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import image_app from "/src/assets/images/mobile.svg";
import image_robot from "/src/assets/images/robot.png";
import image_web from "/src/assets/images/web.png";

import {i18n,$t} from "../i18n";


onMounted(()=>{

})

let products = ref([
  {
    title: $t('project.mobile_app'),
    image_url: image_app,
    path: {name: 'application'}
  },
  {
    title: $t('project.responsive_web'),
    image_url: image_web,
    path: {name: 'web'}
  },
  {
    title: $t('project.crawler'),
    image_url: image_robot,
    path: {name: 'crawler'}
  }
])
</script>

<style scoped>
/*.router-link-exact-active span {*/
/*  color: black;*/
/*}*/

/*.router-link-exact-active:hover span {*/
/*  color: black;*/
/*}*/

.router-link-normal{
  color: #000000;
}

.router-link-active{
  color: #dc3545!important;
}

</style>
