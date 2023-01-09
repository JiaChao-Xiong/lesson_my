<template>
  <div> 
    <h1 @click="add" class="red">{{count}}---</h1>
  </div>
  </template>
  <script setup>
  import { ref } from 'vue';  
  // ref 响应式  简单值  
  let count = ref(1);
  function add() {
    count.value++;
  }
  </script>
  <style>
  .red {
    color: red;
  }
  </style>