<template>
    <ul>
        <li v-for="i in list" :key="i">
            <img :src="i.cover" alt="" />
            <p>{{ i.title }}</p>
            <p>{{ i.simple }}</p>
            <p>{{ i.ctime.split("T")[0] }}</p>
        </li>
    </ul>
</template>

<script setup>
import { ref } from "vue";
let list = ref([]);

fetch("https://api.tf2sc.cn/api/tfcar/website/indexNews", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        list.value = res.data;
    });
</script>

<style scoped>
ul {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
ul > li {
    width: 380px;
    height: 488px;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #f5f7fe;
    margin-right: 30px;
    margin-bottom: 70px;
    overflow: hidden;
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 15%);
    cursor: pointer;
}
ul > li:nth-of-type(3n) {
    margin-right: 0px;
}
ul > li:hover {
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 50%);
    transition: all 0.5s;
}
ul > li:hover p:nth-of-type(1) {
    color: #5685fe;
}
li img {
    width: 100%;
    height: 285px;
    border-radius: 8px;
}
ul > li > p:nth-of-type(1) {
    font-size: 18px;
    line-height: 26px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 14px;
    height: 52px;
    margin: 20px 20px 0;
}
ul > li > p:nth-of-type(2) {
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    height: 40px;
    margin: 0 20px 26px;
}
ul > li > p:nth-of-type(3) {
    margin: 0 20px 26px;
    color: #999999;
    font-size: 12px;
    line-height: 20px;
}
</style>