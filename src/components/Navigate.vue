<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container px-5">
      <a class="navbar-brand" href="/">iapplus</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link active" aria-current="page" href="/">首页</a>
            </router-link>
          </li>
          <li class="nav-item">
<!--            <a class="nav-link" href="/">项目</a>-->
            <router-link to="/product">
              <a class="nav-link active" aria-current="page" href="/">项目</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#">
              <a class="nav-link" href="#">课程</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#">
              <a class="nav-link" href="/article">文章</a>
            </router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="/component">新闻</a>-->
<!--          </li>-->
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Navigate"
}
</script>

<style scoped>

</style>
