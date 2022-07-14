<template>
    <div class="all">
        <div class="body">
            <div>
                <img
                    src="https://www.tf2sc.cn/static/img/%E8%85%BE%E5%8F%91.png"
                    alt=""
                />
                <img
                    src="	https://www.tf2sc.cn/static/img/%E5%AE%9A%E4%BD%8D.png"
                    alt=""
                />
                <city></city>
            </div>
            <div>
                <router-link to="/">首页</router-link>
                <router-link to="/used_car">二手车</router-link>
                <router-link to="/new_car">新车</router-link>
                <router-link to="/sell_car">卖车</router-link>
                <router-link to="/finance">腾发金融</router-link>
                <router-link to="/helper">腾发服务</router-link>
                <p>
                    咨询电话
                    <span>400-0606-777</span>
                </p>
            </div>
        </div>
    </div>

    <router-view></router-view>

    <bottom></bottom>
    <ez_index></ez_index>
</template>

<script setup>
import city from "./components/city.vue";
import bottom from "./components/bottom.vue";
import ez_index from "./components/ez_index.vue";
</script>

<style>
* {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    user-select: none;
    -webkit-user-drag: none;
}
body {
    padding-top: 70px;
    font-size: 16px;
    background-color: rgba(248, 248, 248, 0.5);
}
.all {
    width: 100vw;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
}
.body {
    width: 1200px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.body > div {
    display: flex;
    align-items: center;
}
.body > div:nth-of-type(2) {
    margin-right: 20px;
}
.body > div > img {
    width: 130px;
}
.body > div > img:nth-of-type(2) {
    width: 14px;
    margin: 0 5px 0 20px;
}
.body > div > a {
    margin-right: 50px;
    padding: 12px 0;
    border-bottom: 2px solid #fff;
    color: #333333;
}
.router-link-active {
    border-bottom: 2px solid #5685fe !important;
}
.body > div > p > span {
    color: #5685fe;
}
</style>