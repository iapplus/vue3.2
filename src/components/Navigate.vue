<template>
  <div class="modal-mask" v-show="modalShow" @click="modalShow=false"/>
  <Login :modal-show="modalShow"/>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: rgb(21,22,33)">
    <div class="container px-5">
      <a class="navbar-brand" href="/">iapplus</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>
              {{ $t('navigation.index') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product/application" class="nav-link" exact>
              {{ $t('navigation.project') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'all_courses'}" class="nav-link" exact>
              {{ $t('navigation.course') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/article" class="nav-link" exact>
              {{ $t('navigation.article') }}
            </router-link>
          </li>
          <li class="nav-item">
            <div class="nav-link" style="cursor: pointer" @click="showModal">
              {{ $t('navigation.login') }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue";
import Login from "./LoginModal.vue";

let modalShow = ref(false)
const showModal = () => {
  modalShow.value = true
}

</script>

<style scoped>
nav {
  /*opacity: 0.9;*/
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: all 0.6s ease-in;
  -webkit-transition: all 0.6s ease-in;
  filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -webkit-filter:blur(10px) ;
  backdrop-filter: blur(10px);
}
</style>
