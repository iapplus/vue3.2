<template>
  <div class="modal-wrapper" v-show="modalShow">
    <div class="modal-container rounded-3 shadow">
      <div class="d-flex flex-row justify-content-between">
        <div class="w-50 text-white display-3 wow animate__animated animate__fadeIn">
          <img src="/src/assets/svg/login.svg" class="w-100 mt-5" alt="">
        </div>
        <div class="w-50 p-3 wow animate__animated animate__fadeInUp">
          <h3 class="text-white text-gradient-style-1">
            Sign In
          </h3>
          <div class="mt-2">
            <input type="text" class="w-100"  id="account" placeholder="account" maxlength="10">
          </div>
          <div class="mt-2">
            <input type="password" class="w-100" id="password" placeholder="password" maxlength="20">
          </div>
          <div class="mt-2">
            <button class="w-100 btn btn-warning" type="submit">登陆</button>
          </div>
          <hr style="color: white">
          <div style="color: white">
            <div>
              Don't have an account?
              <a href="">Sign up</a>
            </div>

            <div>
              Forgot password?
              <a href="">Reset password</a>
            </div>
            <div>
              Don't have a password yet?
              <a href="">Set password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modalShow: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
.modal-wrapper {
  overflow: hidden;
  position: fixed;
  z-index: 10000;
  margin-top: 10%;
  left: 50%;
  margin-left: -20rem;
}

.modal-container {
  width: 40rem;
  height: 28rem;
  padding: 20px 30px;
  background-color: rgba(26, 28, 47, 0.8);
  transition: all 0.3s ease;
}
</style>
