<template>
  <Navigate/>
  <div class="container mt-2 wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
    <header class="rounded-3 bg-image" :style="{
      backgroundImage: `url(${img})`
    }">
      <div class="container">
        <div class="col-md-8 p-lg-5 mx-auto my-3 h-100">
          <h1 class="display-6 fw-normal">基于Qt的自动办公效率工具
<!--            <Test ref="mTest" msg1="abcdef" age1="😂"/>-->
          </h1>
          <p class="lead fw-normal">世界级大型电商网站，视频网站均可抓取</p>
          <p class="lead fw-normal">无图模式降低内存消耗的同时减少了GPU的计算以及带宽的占用，爬取效率提升80%</p>
          <p class="lead fw-normal">无头模式可以部署在Linux系统</p>
          <a class="btn btn-outline-dark btn-lg" onclick="">了解详情</a>
        </div>
      </div>
    </header>
    <div class="row align-items-md-stretch mt-4">
      <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
        <div class="h-100 p-5 rounded-3 bg-dark text-white bg-image" :style="{
      backgroundImage: `url(${img_001})`
    }">
          <h2 class="text-gradient-style-1">基于GRPC实现多语言微服务架构</h2>
          <p class="text-gradient-style-1">k8s+集群+数据库分片</p>
          <button class="btn btn-outline-light" type="button">了解更多</button>
        </div>
      </div>
      <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__fadeIn" data-wow-delay="0.6s"
           style="height: auto">
        <div class="h-100 p-5 rounded-3"
             style="background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);">
          <h2>针对企业的效率工具</h2>
          <p>砍掉重复性劳动，为企业节约时间</p>
          <button class="btn btn-outline-secondary" type="button">即将到来</button>
        </div>
      </div>
    </div>

    <div class="row align-items-md-stretch mt-4">
      <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__slideIn" data-wow-delay="0.8s"
           style="height: auto">
        <div class="h-100 p-5 rounded-3 text-white"
             style="background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);">
          <h2>响应式网页开发</h2>
          <p>移动端、个人电脑、平板共用一套代码</p>
          <button class="btn btn-outline-light" type="button">了解更多</button>
        </div>
      </div>
      <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__slideIn" data-wow-delay="1s"
           style="height: auto">
        <div class="h-100 p-5 rounded-3 bg-dark text-white">
          <h2>能进行自我提升的课程</h2>
          <p>时间就是生命</p>
          <button class="btn btn-outline-light" type="button">了解更多</button>
        </div>
      </div>
    </div>
    <!-- Features section-->
    <section id="features" class="mt-4">
      <div class="pt-5 bg-light text-white rounded-3 gradient-animation">
        <div class="container row gx-5">
          <!--                 style="background-image: url('images/stars.svg')"-->
          <div class="col-lg-4 mt-5 mb-5 mb-lg-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s"><h2
              class="fw-bolder mb-0">网站定位</h2></div>
          <div class="col-lg-8">
            <div class="row gx-5 row-cols-1 row-cols-md-2">
              <div class="col mb-5 h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                <div class="feature text-white mb-3"><i
                    class="bi bi-collection"></i></div>
                <h2 class="h5">开发中心</h2>
                <p class="mb-0">发扬软件界的工匠精神，专业的人做专业的事，把创意交给你，把开发交给我</p>
              </div>
              <div class="col mb-5 h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                <div class="feature text-white mb-3"><i
                    class="bi bi-building"></i></div>
                <h2 class="h5">实验室</h2>
                <p class="mb-0">既做开发，也做研究。人机交互、前沿设计、智能硬件、机器学习...</p>
              </div>
              <div class="col mb-5 mb-md-0 h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                <div class="feature text-whitemb-3"><i
                    class="bi bi-toggles2"></i></div>
                <h2 class="h5">微课堂</h2>
                <p>提供的课程能为您带来技术视野的提升</p>
              </div>
              <div class="col h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                <div class="feature text-white mb-3"><i
                    class="bi bi-toggles2"></i></div>
                <h2 class="h5">自营</h2>
                <p>依托强大开发能力，为MAC、Android、IOS提供免费优秀无广告应用</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <!--Waves Container-->
        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>
            </g>
          </svg>
        </div>
        <!--Waves end-->
      </div>
    </section>

    <!-- Blog preview section-->
    <section class="mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-6">
          <div class="text-center">
            <h2 class="fw-bolder">互联网应用开发服务</h2>
            <p class="lead fw-normal text-muted mb-5">跨端、跨栈、跨平台</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 mb-5 wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
          <div class="card h-100 shadow border-0">
            <div id="lottie_1" style="height: 15rem"></div>
            <div class="card-body p-4 text-gradient-style-3">
              <div>前端技术</div>
              <a class="text-decoration-none link-dark stretched-link"><h5 class="card-title mb-3">
                vue、react、reactnative</h5></a>
              <p class="card-text mb-0">
                跨Android和IOS的应用程式
              </p>
              <p class="card-text mb-0">
                前后端分离的后台管理系统
              </p>
              <p class="card-text mb-0">
                依托强大动画库，为APP提供前所未用的体验
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-5 wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
          <div class="card h-100 shadow border-0">
            <div id="lottie_2" style="height: 15rem"
            ></div>
            <div class="card-body p-4 text-gradient-style-4"
                 data-wow-delay="0.4s">
              <!--                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">后端技术</div>-->
              <div>后端技术</div>
              <a class="text-decoration-none link-dark stretched-link"><h5 class="card-title mb-3">
                php8、Golang、python</h5></a>
              <p class="card-text mb-0">层次清晰的源代码
              </p>
              <p class="card-text mb-0">量身定制的MySQL数据模式
              </p>
              <p class="card-text mb-0">提供高性能专业级的API服务
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-5 wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
          <div class="card h-100 shadow border-0">
            <div id="lottie_3" style="height: 15rem"></div>
            <div class="card-body p-4 text-gradient-style-5"
                 data-wow-delay="0.6s">
              <!--                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">服务器</div>-->
              <div>服务器</div>
              <a class="text-decoration-none link-dark stretched-link"><h5 class="card-title mb-3">
                Linux、Git、kafka、docker...</h5></a>
              <p class="card-text mb-0">自动化部署，构建</p>
              <p class="card-text mb-0">依托Linux生态，打造智能运维4.0</p>
              <p class="card-text mb-0">依托docker技术，实现弹性伸缩</p>
              <p class="card-text mb-0">完善的日志统计</p>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    <hr>-->


    <!--Waves Container-->
    <!--    <div>-->
    <!--      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
    <!--           viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">-->
    <!--        <defs>-->
    <!--          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>-->
    <!--        </defs>-->
    <!--        <g class="parallax">-->
    <!--          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>-->
    <!--          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>-->
    <!--          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>-->
    <!--          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>-->
    <!--        </g>-->
    <!--      </svg>-->
    <!--    </div>-->
    <!--Waves end-->
    <div class="row py-5">
    </div>
  </div>
  <Footer/>

</template>

<script setup>
import Navigate from "../components/Navigate.vue";
import Footer from "./Footer.vue";
import WOW from 'wow.js'
import {onMounted, ref} from "vue";
import lottie from 'lottie-web';
import img from '/src/assets/images/mac_colorful.jpg'
import img_001 from '/src/assets/images/video.webp'

import lottie_json_1 from '/src/assets/lottie/lottie_json_1.json'
import lottie_json_2 from '/src/assets/lottie/lottie_json_2.json'
import lottie_json_3 from '/src/assets/lottie/lottie_json_3.json'

import _ from 'lodash';
import Test from "../components/Test.vue";
import Abcdef from "../components/Abcdef.vue";


onMounted(() => {
  window.addEventListener('scroll', _.throttle((x) => {
    if (window.pageYOffset > 1400) {
      document.querySelector('body').style.backgroundColor = '#000000'
      let x = document.querySelectorAll('.card.h-100.shadow.border-0')
      for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = '#000000'
      }
    } else {
      document.querySelector('body').style.backgroundColor = '#ffffff'
      let x = document.querySelectorAll('.card.h-100.shadow.border-0')
      for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = '#ffffff'
      }
    }
  }, 300))
  document.querySelector('body').style.transition = "1s all"


  let wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animate__animated"
  })
  wow.init()

  lottie.loadAnimation({
    container: document.querySelector("#lottie_1"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    // path: '/src/assets/lottie/lottie_json_1.json',
    animationData: lottie_json_1
  });
  lottie.loadAnimation({
    container: document.querySelector("#lottie_2"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: lottie_json_2
  });
  lottie.loadAnimation({
    container: document.querySelector("#lottie_3"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: lottie_json_3
  });
})


</script>

<style scoped>

@keyframes gradient-animation-keyframe {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.gradient-animation {
  background: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  background-size: 200% 200%;
  animation: gradient-animation-keyframe 10s infinite;
  transition: background-position 10s ease-in;
}

.tttttttt {
  font-weight: 200;
  font-size: 1.8em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}

.tttttttt .letter {
  display: inline-block;
  line-height: 1em;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
}

/*    mario-start*/

.mario-map {
  /*border: 1px solid #fff;*/
  width: 100%;
  height: 88px;
  display: flex;
  padding-bottom: 40px;
  justify-content: space-around;
  align-items: flex-end;
  background-image: url('/src/assets/images/vFz4Y5S.png');
  background-repeat: repeat-x;
  background-position: 0 17px;
}

.mario-map::before {
  width: 23px;
  height: 18px;
  display: inline-block;
  content: '';
  animation: run 2s infinite alternate ease-in-out;
  background-image: url('/src/assets/images/XSyqdku-1.png');
}

@keyframes run {
  from {
    transform: translateX(-30px)
  }
  to {
    transform: translateX(30px)
  }
}

.mario-map::after {
  width: 23px;
  height: 18px;
  display: inline-block;
  content: '';
  animation: jump .5s infinite alternate;
  background-image: url('/src/assets/images/XSyqdku-1.png');
}

@keyframes jump {
  from {
    transform: translateY(0px)
  }
  to {
    transform: translateY(-30px)
  }
}


.bg-image {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}

</style>
