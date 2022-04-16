<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Navigation/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import Navigation from "../components/Navigation.vue";
import Header from "../components/Header.vue";

export default {
  name: "Layout",
  components: {Header, Navigation}
}
</script>

<style scoped>

</style>
