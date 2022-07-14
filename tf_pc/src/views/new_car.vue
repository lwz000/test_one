<template>
    <new_screen></new_screen>
    <div class="no_list">
        <img src="https://www.tf2sc.cn/static/img/zanwu.png" alt="" />
        <p>找不到内容，换个关键词试试吧~</p>
    </div>
</template>

<script setup>
import new_screen from "../components/new_screen.vue";
</script>

<style scoped>
.no_list {
    width: 1200px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
}
.no_list > img {
    width: 282px;
    margin-bottom: 30px;
}
</style>