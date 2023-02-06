<script setup>

</script>

<template>
<!-- <p>
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
</p>
<router-view /> -->
<!-- 组件库 element3 -->
<!-- 布局组件 -->
<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/about">About</router-link>
      </div>
      <div>
        <router-link to="/other">Other</router-link>
      </div>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
#app > .el-container {
  margin-bottom: 40px;
  background-color: red;
}
</style>
