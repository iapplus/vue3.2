<template>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light rounded-3 wow animate__animated animate__fadeIn">
    <div class="col-md-5 p-lg-5 mx-auto">
      <h1 class="display-4 fw-normal">react native 高仿某自营电商APP</h1>
      <p class="lead fw-normal">主流技术，稳定可靠。</p>
      <button id="apply">申请体验</button>
    </div>
    <div class="product-device shadow-sm d-none d-md-block wow animate__animated animate__fadeIn">
      <img src="/src/assets/images/app_2.png" class="d-block w-100" alt="...">
    </div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block">
      <img src="/src/assets/images/app_1.png" class="d-block w-100" alt="...">
    </div>
  </div>

  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div
        class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden rounded-3  wow animate__animated animate__fadeIn"
        style="background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
">
      <div class="wow animate__animated animate__fadeInLeft">
        <div class="my-3 py-3">
          <h2 class="display-5">人机交互专项研究</h2>
          <p class="lead">小屏幕，大显身手</p>
        </div>
        <div class="bg-light shadow-sm mx-auto   wow animate__animated animate__slideInUp" data-wow-delay="0.4s"
             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
          <img src="/src/assets/images/app_3.png" class="d-block w-100" alt="">

        </div>
      </div>
    </div>
    <div
        class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded-3 wow animate__animated animate__fadeInRight"
        style="">
      <div class="my-3 p-3">
        <h2 class="display-5">遵循设计规范</h2>
        <p class="lead">像素级别，精益求精</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto    wow animate__animated animate__slideInUp" data-wow-delay="0.8s"
           style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
        <img src="/src/assets/images/app_1.png" class="d-block w-100" alt="">
      </div>
    </div>
  </div>
  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div
        class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded-3 wow animate__animated animate__fadeIn"
        style="background-color: #FBDA61;
background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
">
      <div class="my-3 p-3 text-white  wow animate__animated animate__fadeInLeft">
        <h2 class="display-5">跨平台</h2>
        <p class="lead">基于facebook开源技术，Android和IOS皆可运行</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto    wow animate__animated animate__slideInUp" data-wow-delay="0.4s"
           style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
        <img src="/src/assets/images/app_4.png" class="d-block w-100" alt="">
      </div>
    </div>
    <div
        class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden rounded-3  wow animate__animated animate__fadeIn"
        style="background-color: #08AEEA;
background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);

">
      <div class="my-3 py-3  wow animate__animated animate__fadeInRight">
        <h2 class="display-5">行业标准方案</h2>
        <p class="lead">应用商店，无数应用争奇斗艳；看今朝，程序员谱写代码浪漫</p>
      </div>
      <div class="shadow-sm mx-auto   wow animate__animated animate__slideInUp" data-wow-delay="0.8s"
           style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
        <img src="/src/assets/images/app_5.png" class="d-block w-100" alt="">
      </div>
    </div>
  </div>
  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div
        class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded-3 wow animate__animated animate__fadeIn">
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Hover me!</h2>
        </div>
      </div>
    </div>
    <div
        class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden rounded-3  wow animate__animated animate__fadeInRight"
        style="background-color: #08AEEA;
background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);

">
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import image_app from "../assets/images/app.png";
import image_mini_app from "../assets/images/miniapp.png";
import image_robot from "../assets/images/robot.png";
import image_web from "../assets/images/web.png";
import WOW from "wow.js";

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

let wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animate__animated"
})
wow.init()
</script>

<style scoped>
.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}

.site-header a {
  color: #8e8e8e;
  transition: color .15s ease-in-out;
}

.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  /*background-color: #333;*/
  border-radius: 21px;
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  /*background-color: rgba(255, 255, 255, .1);*/
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.flex-equal > * {
  flex: 1;
}

@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}


@keyframes gradient-animation-keyframe {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animation {
  background: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  background-size: 200% 200%;
  animation: gradient-animation-keyframe 10s infinite;
  transition: background-position 10s ease-in;
}


.btn-grad {
  background-image: linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)
}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}


/* From uiverse.io by @Codewithvinay */
.box {
  position: relative;
  width: 220px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 1;
}

.box::before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  text-decoration: none;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}

.box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(30px);
}

.box:hover:before,
.box:hover:after {
  transform: skewX(0deg) scaleX(1.3);
}

.box:before,
.box:after {
  background: linear-gradient(315deg, #ffbc00, #ff0058)
}

.box span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  pointer-events: none;
}

.box span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.1s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08)
}

.box span::before {
  top: -40px;
  left: 40px;
  width: 50px;
  height: 50px;
  opacity: 1;
}

.box span::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  animation-delay: -1s;
}

.box span:after {
  bottom: -40px;
  right: 40px;
  width: 50px;
  height: 50px;
  opacity: 1;
}

.box .content {
  position: relative;
  width: 190px;
  height: 254px;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  transform: 0.5s;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .content h2 {
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}


/* From uiverse.io by @ShadowShahriar */
#apply {
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  /*background-color: #212121;*/
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
  font-size: 18px;
  font-weight: 500;
  /*color: #000000;*/
  z-index: 2;
}

#apply::after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: var(--border-radius);
  background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
  );
  -webkit-mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  -webkit-mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  -webkit-mask-clip: var(--m-o);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue linear 500ms infinite;
  animation-play-state: paused;
}

#apply:hover::after {
  animation-play-state: running;
}

@keyframes rotate-hue {
  to {
    filter: hue-rotate(1turn);
  }
}

#apply,
#apply::after {
  box-sizing: border-box;
}

#apply:active {
  --border-width: 5px;
}

</style>
