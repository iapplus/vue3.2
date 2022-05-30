<template>
  <div class="d-flex vh-100" style="background:linear-gradient(-45deg,#294951,#d74fff,#dfb306);">
    <div class="container py-2">
      <div class="row">
        <div class="col-2">
          <h1>Learn</h1>
          <ul>
            <li v-for="(item,index) in ['Tutorial','LiveStream']"  @click="menu_item_click(index)" style="background-color: black;cursor: pointer;" class="text-white text-center rounded-3 my-2 py-3 shadow-sm course-menu-item">
              <div>
                {{ item }}
              </div>
            </li>
          </ul>
        </div>
        <div class="col-10">
          <div class="row">
            <div v-for="(item,index) in courses[current_index]" class="col-12 col-sm-4 col-md-3 course-item">

              <router-link :to="{name:'course',params:{course_id:item.id}}" q class="nav-link" exact>
                <div class="my-2 shadow rounded-3 p-2" style="height: 10rem;background-color: rgba(51,0,162,0.76)">
                  <div class="h-100 text-white">
                    <h6>{{ item.title }}</h6>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="a">
    <div class="b">Helloworld</div>
    <div class="c">wangpengyu</div>
  </div>
  <abcdef a="111111" b="222222"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Abcdef from '@/components/Abcdef.vue';

let courses = ref([
  [{id: 1, title: '从设计到编码', bg_color: 'linear-gradient(-45deg,#32c5ff,#b620e0,#f7b500)'},
    {id: 1, title: '从设计到编码', bg_color: 'green'},
    {id: 1, title: '从设计到编码', bg_color: 'blue'},
    {id: 1, title: '从设计到编码', bg_color: 'red'},
    {id: 1, title: '从设计到编码', bg_color: 'green'},
    {id: 1, title: '从设计到编码', bg_color: 'blue'},
    {id: 1, title: '从设计到编码', bg_color: 'red'},
    {id: 1, title: '从设计到编码', bg_color: 'green'},
    {id: 1, title: '从设计到编码', bg_color: 'blue'}],
  [{id: 1, title: '从设计到编码2', bg_color: 'red'},
    {id: 1, title: '从设计到编码3', bg_color: 'red'},
    {id: 1, title: '从设计到编码4', bg_color: 'red'}],
  [{id: 1, title: '从设计到编码adf', bg_color: 'red'},
    {id: 1, title: 'sdf', bg_color: 'red'},
    {id: 1, title: 'sdfvsadf', bg_color: 'red'}],
])
onMounted(() => {
})

const current_index = ref(0)
const menu_item_click = (index) => {
  current_index.value = index
}
</script>

<style scoped lang="scss">
.course-item{
  transition: all 0.3s;
}
.course-item:hover{
  opacity: 0.8;
}
.course-menu-item:hover{
  opacity: 0.6;
}

.a{
  .b{
    color: red;
  }
  .c{
    color: green;
  }
}
</style>
