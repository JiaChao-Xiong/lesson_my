<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <ul v-if="todos.length">
        <li v-for="todo in todos">
            <input type="checkbox" v-model="todo.done" />
            <span :class="{done: todo.done}">{{todo.title}}</span>
        </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
        全选<input type="checkbox" v-model="allDone">
        <span>{{ active }} / {{all}}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
let title = ref("")
let todos = ref([{"title":"学习Vue",done:false}])
let active = computed(() => todos.value.filter(v => !v.done).length)
let all = computed(() => todos.value.length)
let allDone = computed({
  get: function() {
    return active.value === 0;
  },
  set: function(value) {
    todos.value.forEach(todo => {
      todo.done = value
    })
  }
})
function addTodo() {
    todos.value.push({
        title: title.value,
        done: false
    })
    title.value=''
}
</script>

<style>

</style>