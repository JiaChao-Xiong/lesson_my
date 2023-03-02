<template>
    <div>
        <el-card class="swiper-container">
            <!-- 内部? slot 区域 -->
            <!-- 定制卡片内容 slot -->
            <template #header>
                <div class="header">
                    <el-button type="primary" :icon="Plus">增加</el-button>
                    <el-button type="danger" :icon="Delete">批量删除</el-button>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>

</style>