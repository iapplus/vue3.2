<template>
  <div style="background-color:rgb(21,22,33)">
    <div class="container" data-wow-delay="0.2s">
      <div style="min-height: 20rem">
        <div class="col-md-8 p-lg-5 mx-auto h-100 hide wow animate__animated animate__fadeInDown">
          <h1 class="display-3 fw-normal text-gradient-style-6">为全世界开发应用程序{{count}}</h1>
        </div>
      </div>
<!--      <header class="rounded-3 bg-image  wow animate__animated animate__fadeIn" :style="{-->
<!--      backgroundImage: `url(${img})`-->
<!--    }">-->
<!--        <div class="container">-->
<!--          <div class="col-md-8 p-lg-5 mx-auto my-3 h-100">-->
<!--            <h1 class="display-6 fw-normal">基于Qt的自动办公效率工具-->
<!--              &lt;!&ndash;            <Test ref="mTest" msg1="abcdef" age1="😂"/>&ndash;&gt;-->
<!--            </h1>-->
<!--            <p class="lead fw-normal">世界级大型电商网站，视频网站均可抓取</p>-->
<!--            <p class="lead fw-normal">无图模式降低内存消耗的同时减少了GPU的计算以及带宽的占用，爬取效率提升80%</p>-->
<!--            <p class="lead fw-normal">无头模式可以部署在Linux系统</p>-->
<!--            <a class="btn btn-outline-dark btn-lg" onclick="">了解详情</a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </header>-->
      <img src="src/assets/svg/rainbow_circle.svg" style="position: absolute;width: 40rem;right: -20rem;top: 14rem;z-index: 0" class="wow animate__animated animate__slideInRight" data-wow-delay="1.3s">

      <div class="row align-items-md-stretch mt-4 wow animate__animated animate__fadeIn">
        <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__fadeIn" data-wow-delay="0.6s"
             style="height: auto">
          <div class="h-100 p-5 rounded-3 text-white"
               style="background-color: rgba(26,28,47,0.6)">
            <h2>从设计到编码</h2>
            <p>持续不断的跟进新技术与新设计</p>
            <button class="btn btn-outline-light" type="button">即将到来</button>
          </div>
        </div>
        <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__fadeIn" data-wow-delay="0.6s"
             style="height: auto">
          <div class="h-100 p-5 rounded-3 text-white"
               style="background-color: rgba(26,28,47,0.6)">
            <h2>效率工具</h2>
            <p>提升工作效率</p>
            <button class="btn btn-outline-light" type="button">即将到来</button>
          </div>
        </div>
      </div>
      <div class="row align-items-md-stretch mt-4">
        <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__fadeIn" data-wow-delay="1s"
             style="height: auto">
          <div class="h-100 p-5 rounded-3 text-white" style="background-color: rgba(26,28,47,0.6)">
            <h2>响应式网页开发</h2>
            <p>移动端、个人电脑、平板共用一套代码</p>
            <button class="btn btn-outline-light" type="button">了解更多</button>
          </div>
        </div>
        <div class="col-md-6 mt-sm-4 mt-md-0 mt-xs-4 mt-4 wow animate__animated animate__fadeIn" data-wow-delay="1.2s"
             style="height: auto">
          <div class="h-100 p-5 rounded-3 text-white" style="background-color: rgba(26,28,47,0.6)">
            <h2>能进行自我提升的课程</h2>
            <p>非常有价值的课程</p>
            <button class="btn btn-outline-light" type="button">了解更多</button>
          </div>
        </div>
      </div>
      <!-- Features section-->
      <section id="features" class="mt-4">
        <div class="pt-5 text-white rounded-3 gradient-animation">
          <div class="container row gx-5">
            <!--                 style="background-image: url('images/stars.svg')"-->
            <div class="col-lg-4 mt-5 mb-5 mb-lg-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s"><h2
                class="fw-bolder mb-0 text-gradient-style-1">我愿意用我所有的科技去换取和苏格拉底相处的一个下午。——乔布斯</h2></div>
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
              <g class="parallax" style="background-color: rgb(40,40,49)">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(26,28,47,1)"/>
<!--                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,0,0.6)"/>-->
<!--                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,0,255,0.4)"/>-->
<!--                <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(0,255,255,0.2)"/>-->
              </g>
            </svg>
          </div>
          <!--Waves end-->
        </div>
      </section>

      <!-- Blog preview section-->
      <section class="mt-5">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-6 text-white">
            <div class="text-center">
              <h2 class="fw-bolder">互联网应用开发服务</h2>
              <p class="lead fw-normal text-muted mb-5">跨端、跨栈、跨平台</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-5 wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
            <div class="h-100 border-0">
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
            <div class="border-0 overflow-hidden">
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
            <div class="border-0">
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
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
import WOW from 'wow.js'
import {onMounted, ref} from "vue";
import _ from 'lodash';
import lottie from "lottie-web";
import {get} from "../http"
import useCounterStore from "../store/main"
import {storeToRefs} from "pinia";


(new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animate__animated"
})).init()

onMounted(() => {
  let store = useCounterStore()
  const { count,double } = storeToRefs(store);
  // console.log(store.count)
  console.log('调用',count.value)
  count.value = 2000
  console.log('调用',count.value)
  console.log('double',double)

  // window.addEventListener('scroll', _.throttle((x) => {
  //   if (window.pageYOffset > 1400) {
  //     document.querySelector('body').style.backgroundColor = '#000000'
  //     let x = document.querySelectorAll('.card.h-100.shadow.border-0')
  //     for (let i = 0; i < x.length; i++) {
  //       x[i].style.backgroundColor = '#000000'
  //     }
  //   } else {
  //     document.querySelector('body').style.backgroundColor = '#ffffff'
  //     let x = document.querySelectorAll('.card.h-100.shadow.border-0')
  //     for (let i = 0; i < x.length; i++) {
  //       x[i].style.backgroundColor = '#ffffff'
  //     }
  //   }
  // }, 300))
  // document.querySelector('body').style.transition = "1s all"
  for (let i=1;i<4;i++){

    setTimeout(function (){
      // get(`http://localhost:3000/lottie/lottie_json_${i}.json`).then((res)=>{
      //   lottie.loadAnimation({
      //     container: document.querySelector(`#lottie_${i}`),
      //     renderer: 'svg',
      //     loop: true,
      //     autoplay: true,
      //     path: `/lottie/lottie_json_${i}.json`,
      //     animationData: res.data
      //   });
      // }).catch((err)=>{
      //   console.log(err)
      // })
      lottie.loadAnimation({
        container: document.querySelector(`#lottie_${i}`),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/lottie/lottie_json_${i}.json`,
        // animationData: res.data
      });

    },300+i*100)
  }




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
  background: linear-gradient(-20deg, rgb(26,28,47,0.6) 0%, rgb(21,22,33) 100%);
  background-size: 200% 200%;
  animation: gradient-animation-keyframe 10s infinite;
  transition: background-position 10s ease-in;
}

/*.tttttttt {*/
/*  font-weight: 200;*/
/*  font-size: 1.8em;*/
/*  text-transform: uppercase;*/
/*  letter-spacing: 0.5em;*/
/*}*/

/*.tttttttt .letter {*/
/*  display: inline-block;*/
/*  line-height: 1em;*/
/*}*/

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
