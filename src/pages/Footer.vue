<template>
  <footer class="overflow-hidden wow animate__animated animate__fadeIn">
    <div class="container py-4">
      <div class="row">
        <div class="col-12 col-md-6">
          <!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"-->
          <!--               stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img"-->
          <!--               viewBox="0 0 24 24"><title>Product</title>-->
          <!--            <circle cx="12" cy="12" r="10"/>-->
          <!--            <path-->
          <!--                d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>-->
          <!--          </svg>-->
          <small class="d-block mb-3 text-muted">Copyright © 2022 iapplus.com 保留所有权利
            <a class="link-secondary"
               href="https://beian.miit.gov.cn" style="text-decoration: none;">晋ICP备2020012510号
            </a>
          </small>
        </div>
        <div class="col-12 col-md-6">
          <h5>频道</h5>
          <div @click="selectLanguage(0)">
            中文
          </div>
          <div @click="selectLanguage(1)">
            英语
          </div>

          <!--          <ul class="list-unstyled text-small row">-->
          <!--            <li class="col-1"><a class="link-secondary" href="#"><i class="bi bi-youtube"></i></a></li>-->
          <!--            <li class="col-1"><a class="link-secondary" href="#"><i class="bi bi-facebook"></i></a></li>-->
          <!--            <li class="col-1"><a class="link-secondary" href="#"><i class="bi bi-twitter"></i></a></li>-->
          <!--          </ul>-->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

import {i18n} from "../i18n";

function selectLanguage(index) {
  const idx = ['zh', 'en'][index] || navigator.language.slice(0, 2);
  localStorage.setItem("locale", idx);
  i18n.global.locale = idx;
}
</script>

<style scoped>
footer {
  /*background-color: #f5f5f7;*/
}
</style>
