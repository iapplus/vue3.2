<template>
  <div class="col-12 col-md-6 m-auto">
    <div class="row">
      <div v-for="(item,index) in products" class="col-3 align-items-center py-2"
           style="cursor: pointer;color: black">
        <router-link :to="item.path" style="color:black;">
          <div class="row align-items-center">
            <span class="col-12 text-center">{{ item.title }}</span>
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
import {ref} from "vue";
import image_app from "../assets/images/app.png";
import image_mini_app from "../assets/images/miniapp.png";
import image_robot from "../assets/images/robot.png";
import image_web from "../assets/images/web.png";

// import image_app from 'src/assets/images/app.png'
// import image_mini_app from 'src/assets/images/miniapp.png'
// import image_robot from 'src/assets/images/robot.png'
// import image_web from 'src/assets/images/web.png'

let products = ref([
  {
    title: 'APP',
    image_url: image_app,
    path: {name: 'application'}
  },
  {
    title: '微信生态',
    image_url: image_mini_app,
    path: {name: 'wechat'}
  },
  {
    title: '爬虫',
    image_url: image_robot,
    path: {name: 'crawler'}
  },
  {
    title: '响应式网页',
    image_url: image_web,
    path: {name: 'web'}
  },
])
</script>

<style scoped>

</style>
