<template>
  <el-row>
    <el-col :span="24">
      <el-form
          label-position="left"
          label-width="10-0px"
          :model="state.formInfoObj"
          :rules="state_1.rules"
          ref="ruleForms"
      >
        <el-form-item label="标题" prop="titleVal">
          <el-input v-model="state.formInfoObj.titleVal"></el-input>
        </el-form-item>
        <el-form-item label="链接000" prop="urlVal">
          <el-input v-model="state.formInfoObj.urlVal"></el-input>
        </el-form-item>
        <el-form-item class="form-left">
          <el-button type="primary" @click="submitButton"> 提交</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
          <el-button>中文</el-button>
        </el-form-item>
      </el-form>
    </el-col>

  </el-row>
</template>
<script setup>
import {onMounted, reactive, ref} from "vue";
import {login} from "../api";

onMounted(()=>{
  login({name:"wangpengyu"}).then(res=>{
    console.log("<<<")
    console.log(res.data)
  }).catch(err=>{
    console.log(err)
  })
})

const ruleForms = ref(null);

//使用reactive定于数据
const state = reactive({

  //定义提交的数据
  formInfoObj: {
    titleVal: "",
    urlVal: "",
  }
});

const state_1 = ref({  rules: {
    titleVal: [{ required: true, message: "请输入标题", trigger: "blur" }],
    urlVal: [
      {
        required: true,
        trigger: "blur",
      },
    ]
  },})

const submitButton = () => {
  ruleForms.value.validate((valid) => {
    // if (valid) {
    //   console.log("通过");
    //   console.log(state.formInfoObj);
    // } else {
    //   console.log("未通过");
    //   return false
    // }
    alert(valid)
  });
};
</script>
<style >
/*.form-left .el-form-item__content {*/
/*  display: flex;*/
/*}*/
</style>
