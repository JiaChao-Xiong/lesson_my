<template>
  <div class="login-body">
      <div class="login-container">
          <div class="head">
              <img src="" alt="" class="logo">
              <div class="name">
                  <div class="title">新蜂商城</div>
                  <div class="tips">Vue3.0后台管理系统</div>
              </div>
          </div>
          <el-form 
              label-position="top" 
              :rules="state.rules" 
              :model="state.formData" 
              ref="loginForm"
              class="login-form"
          >
              <el-form-item label="账号" prop="username">
                  <el-input type="text" v-model="state.formData.username"
                      autocomplete="off"
                  />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                  <el-input type="password" 
                      v-model="state.formData.password"
                      autocomplete="off"
                  />
              </el-form-item>
              <el-form-item>
                  <div style="color:#333">登录</div>
                  <el-button 
                      style="width:100%" 
                      type="primary"
                      @click="submitForm"
                  >立即登录</el-button>
                  <el-checkbox 
                      v-model="state.checked"
                  >下次自动登录</el-checkbox>
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { login } from '@/service/user.js'
import md5 from 'js-md5'
import { setLocal } from '@/utils'
import router from '@/router'

const loginForm = ref(null) 
// 初始值为空， 组件还没有挂载

const state = reactive({
  formData: {
      username: '',
      password: ''
  },
  checked: true,
  rules: {
      username: [
          { required: 'true', message: '用户名不能为空', trigger: 'blur'}
      ],
      password: [
          { required: 'true', message: '密码不能为空', trigger: 'blur'}
      ]
  }
})
const submitForm = () => {
  // 验证表单是否填写正确
  // axios  接口 
  loginForm.value.validate(async (valid) => {
      // console.log(valid)
      if (valid) {
          console.log(state.formData);
          const { data } = await login({
              userName: state.formData.username || '',
              passwordMd5: md5(state.formData.password)
          })
          console.log(data);
        // 服务器签发的令牌环
          setLocal('token', data);
          router.push({
             path: '/' 
        })
      } else {

      }
  })
}

onMounted(() => {
  // null -> 组件对象
  // console.log(loginForm)
  // if (va)
})
</script>

<style lang="stylus" scoped>

</style>