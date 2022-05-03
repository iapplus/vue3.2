<template>
  <div class="col-6 m-auto">
    <div class="row">
      <div v-for="(item,index) in products" class="col-3 d-flex flex-column align-items-center py-2"
           style="cursor: pointer">
        <h6>{{ item.title }}</h6>
        <div>
          <img style="width: 36px" :src="item.image_url" alt="">
        </div>
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
    image_url: image_app
  },
  {
    title: '微信生态',
    image_url: image_mini_app
  },
  {
    title: '爬虫',
    image_url: image_robot
  },
  {
    title: '响应式网页',
    image_url: image_web
  },
])
</script>

<style scoped>

</style>
