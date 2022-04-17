<template>
  <button @click="change">点击</button>
  {{name}}
  <div class="common-layout" style="margin-top: 200px">
    <el-container>
      <el-aside width="200px">
        <Navigation/>
      </el-aside>
      <el-container>
<!--        <el-header>-->
<!--          <Header/>-->
<!--        </el-header>-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script setup>
import Navigation from "../components/Navigation.vue";
import Header from "../components/Header.vue";
import {provide, ref} from "vue";

let name = ref('wangpengyu1')

provide('name',name)

const change = ()=>{
  name.value = '😂'
  provide('name',name)
}

// export default {
//   name: "Layout",
//   components: {Header, Navigation}
// }
</script>

<style scoped>

</style>
