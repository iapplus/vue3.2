<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
    <div class="container px-5">
      <a class="navbar-brand" href="/">iapplus</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>
              {{$t('home.index')}}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link" exact>
              {{$t('home.project')}}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/course" class="nav-link" exact>
              {{$t('home.course')}}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/article" class="nav-link" exact>
              {{$t('home.article')}}
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

<script setup>

</script>

<style scoped>
nav {
  opacity: 0.9;
}
</style>
