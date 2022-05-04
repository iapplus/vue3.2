<template>
  <div style="background-color: #f5f5f7">
    <div class="row col-12 col-md-6 m-auto justify-content-center">
      <div v-for="(item,index) in products" class="col-3 align-items-center py-2"
           style="cursor: pointer;color: black">
        <router-link :to="item.path" style="color:black" active-class="a">
          <div class="row align-items-center">
            <span class="col-12 text-center my-1">{{ item.title }}</span>
            <div class="col-12 text-center">
              <img style="width: 36px" :src="item.image_url" alt="">
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import image_app from "../assets/images/app.png";
import image_mini_app from "../assets/images/miniapp.png";
import image_robot from "../assets/images/robot.png";
import image_web from "../assets/images/web.png";

import {i18n,$t} from "../i18n";


onMounted(()=>{

})
// import image_app from 'src/assets/images/app.png'
// import image_mini_app from 'src/assets/images/miniapp.png'
// import image_robot from 'src/assets/images/robot.png'
// import image_web from 'src/assets/images/web.png'

// console.log(t('project.mobile_app'))
let products = ref([
  {
    title: $t('project.mobile_app'),
    image_url: image_app,
    path: {name: 'application'}
  },
  // {
  //   title: '微信小程序',
  //   image_url: image_mini_app,
  //   path: {name: 'wechat'}
  // },
  {
    title: $t('project.crawler'),
    image_url: image_robot,
    path: {name: 'crawler'}
  },
  {
    title: $t('project.responsive_web'),
    image_url: image_web,
    path: {name: 'web'}
  },
])
</script>

<style scoped>
.router-link-exact-active span {
  color: black;
}

.router-link-exact-active:hover span {
  color: black;
}
</style>
