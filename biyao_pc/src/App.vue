<template>
    <Top_box></Top_box>
    <srcoll_ipt></srcoll_ipt>
    <go_head></go_head>
    <div class="top_body">
        <div class="appbar">
            <router-link to="/">首页</router-link>
            <router-link to="/new_list">每日上新</router-link>
            <p>|</p>
            <a class="show_two"
                >了解必要
                <know_by></know_by>
            </a>
            <p>|</p>
            <router-link to="/shopping_car">购物车</router-link>
            <router-link to="/onload">请登录</router-link>
        </div>
    </div>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <page_base></page_base>
</template>

<script>
import Top_box from "./components/top_box.vue";
import srcoll_ipt from "./components/srcoll_ipt.vue";
import go_head from "./components/go_head.vue";
import page_base from "./components/page_base.vue";
import know_by from "./components/know_by.vue";
export default {
    data() {
        return {};
    },
    components: {
        Top_box,
        srcoll_ipt,
        go_head,
        page_base,
        know_by,
    },
};
</script>

<style>
body {
    background: #f9f9f9;
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    user-select: none;
    -webkit-user-drag: none;
}
a {
    color: #000;
}
.top_body {
    width: 100%;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
    background-color: #fff;
}
.appbar {
    display: flex;
    width: 1080px;
    margin: 0 auto;
    padding-bottom: 20px;
    position: relative;
}
.appbar > p,
.appbar > a {
    margin-right: 30px;
}
.appbar > p {
    opacity: 0.3;
}
.appbar > a {
    cursor: pointer;
}
.appbar > a:hover {
    color: #9687a4;
}
.show_two:hover div {
    display: flex !important;
}
</style>