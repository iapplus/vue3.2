<template>
  <div>
    <div id="nav" class="flexc">
      <div class="options"></div>
      <h1>Learn</h1>
      <div class="tabmenu flexc">
      </div>
    </div>
    <main id="main" class="flexc">
      <div class="options"></div>
      <h1 id="hash">Courses</h1>
      <div id="courses">

      </div>
      <h4>Animations</h4>
      <div id="animItems"></div>
      <div class="abcdef">
      </div>
    </main>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

let width = ref('190px')
onMounted(()=>{

})
</script>

<style scoped>
.abcdef{
  width: 100px;
  height: v-bind('width');
  background-color: red;
}
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  height:100vh;
  background:linear-gradient(-145deg,blue ,purple 70%);
  display:grid;
  place-items:center;
}
#ipad{
  width:800px;
  height:600px;
  border-radius:5%;
  border:12px solid #111;
  display:flex;
  z-index:10;
  overflow:hidden;
  position:relative;
}
#nav{
  background:rgb(241,241,248);
  width:210px;
  padding:15px;
  padding-left:15px;
  z-index:3;
}
.flexc{
  display:flex;
  flex-direction:column;
}
.options{
  min-height:20px;
  margin:10px 0px;
}
.tabmenu{
  padding:10px 0px;
}
.tabmenu p{
  padding:10px;
  border-radius:10px;
  cursor:pointer;
}
.active{
  background:rgb(93,32,203);
  color:white;
}
#main{
  padding:10px 12px;
  background:#fff;
  width:100%;
}
#main h1{
}
#courses{
  height:55%;
  display:flex;
  flex-wrap:wrap;
  margin-top:25px;
}
.coursebox{
  margin:0px 10px;
  color:white;
  width:20%;
  height:46%;
  border-radius:18px;
  padding:20px 12px;
}
main h4{
  margin:10px 0px 24px 0px;
}
#animItems{
  display:flex;
  flex-wrap:wrap;
}
.animitem{
  width:30%;
  padding:6px 10px;
  margin:1%;
}
</style>
