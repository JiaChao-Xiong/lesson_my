<template>
    <div>
        Add
        {{ profile.loginUserName }} {{ profile.nickName }}
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUseStore } from '@/store/user.js'
// 如何从中央取profile 到页面组件
const userStore = useUseStore(); // useRouter hooks
console.log(userStore.profile.loginUserName, 'userStore///');

const profile = computed(() => userStore.profile)
// console.log(profile, 'profile///')
</script>

<style lang="stylus" scoped>

</style>