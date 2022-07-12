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
            <router-link to="/onload">{{
                !$store.state.id ? "请登录" : $store.state.id
            }}</router-link>
            <span v-show="$store.state.id" @click="outline()">退出登录</span>
        </div>
    </div>
    <router-view> </router-view>
    <page_base></page_base>
</template>

<script>
import Top_box from "./components/top_box.vue";
import srcoll_ipt from "./components/srcoll_ipt.vue";
import go_head from "./components/go_head.vue";
import page_base from "./components/page_base.vue";
import know_by from "./components/know_by.vue";
import { locStub } from "@vue/compiler-core";
export default {
    data() {
        return {
            msg: "",
        };
    },
    components: {
        Top_box,
        srcoll_ipt,
        go_head,
        page_base,
        know_by,
    },
    methods: {
        outline() {
            this.msg = "请登录";
            this.$store.commit("change_id", "");
            localStorage.setItem("username", "");
            localStorage.setItem("token", "");
            this.$router.push("/");
        },
    },
    created() {
        if (!localStorage.getItem("token")) {
            this.msg = "请登录";
        } else {
            this.msg = localStorage.getItem("username");
        }
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