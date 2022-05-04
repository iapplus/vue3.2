<template>
  <Navigate/>
  <div style="background-color: #f5f5f7">
    <div class="container pt-3 d-flex flex-column flex-lg-row flex-md-column">
      <div class="col-12 col-md-12 col-lg-8">
        <div v-for="(item,index) in article_items"
             class="d-flex flex-column flex-md-row flex-lg-row mt-4 bg-white p-4 shadow-sm rounded-3  wow animate__animated animate__fadeIn"  data-wow-delay="0.4s" style="cursor: pointer">
          <div class="d-flex justify-content-center align-items-center overflow-hidden rounded-3 article_item_img">
            <img :src="img_001" alt="" style="width: 150%">
          </div>
          <div class="px-4 d-flex flex-column justify-content-between">
            <div>
              <h4>{{ item.title }}</h4>
            </div>
            <div style="color: rgba(0,0,0,.6)">
              {{ item.digest }}
            </div>
            <div>
              {{ item.date }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-12">
        <div class="bg-white m-4 shadow-sm rounded-1 p-4">
          asdasd
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigate from "../components/Navigate.vue";
import img_001 from '/src/assets/images/video.webp'
import {onMounted, ref} from "vue";
import WOW from "wow.js";

let wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animate__animated"
})
wow.init()
let article_items = ref()
onMounted(() => {
  article_items.value = [
    {
      title: "The Slow Burn of an Empty Nest",
      digest: 'If the Supreme Court ultimately decides to overturn the landmark case of Roe v. Wade, then it will not only reverse nearly 50 years of precedent — it will relegate the most intensely personal decision someone can make to the whims of politicians and ideologues.',
      image: "https://",
      date: "21 Apri 23"
    },
    {
      title: "The Slow Burn of an Empty Nest",
      digest: 'If the Supreme Court ultimately decides to overturn the landmark case of Roe v. Wade, then it will not only reverse nearly 50 years of precedent — it will relegate the most intensely personal decision someone can make to the whims of politicians and ideologues.',
      image: "https://",
      date: "21 Apri 23"
    },
    {
      title: "The Slow Burn of an Empty Nest",
      digest: 'If the Supreme Court ultimately decides to overturn the landmark case of Roe v. Wade, then it will not only reverse nearly 50 years of precedent — it will relegate the most intensely personal decision someone can make to the whims of politicians and ideologues.',
      image: "https://",
      date: "21 Apri 23"
    },
  ]
})
</script>

<style scoped>
.article_item_img img {
  transition: all 0.6s;
  -webkit-transition: all 0.6s;
}

.article_item_img:hover img {
  transform: scale(1.2);
  transition: all 1s;
  -webkit-transition: all 0.6s;
}
</style>
