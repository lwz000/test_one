<template>
    <div class="body">
        <div>
            <span @click="$router.push('/')" style="cursor: pointer">首页</span>
            <span>></span>
            <span>{{ $route.query.type }}</span>
        </div>
        <ul>
            <li style="cursor: default">{{ $route.query.type }}:</li>
            <li
                v-for="(i, index) in msg"
                :key="i"
                v-show="index < 10"
                @click="go(i)"
            >
                {{ i }}
            </li>
        </ul>
        <eve_type :type_two="i" v-for="i in msg" :key="i"></eve_type>
    </div>
</template>

<script>
import eve_type from "../components/list_com.vue";
export default {
    data() {
        return {
            msg: [],
        };
    },
    methods: {
        go(x) {
            this.msg = [x];
        },
    },
    created() {
        fetch(`/getTypeTwo?type_one=${this.$route.query.type}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg = res;
            });
    },
    components: {
        eve_type,
    },
    beforeRouteUpdate(to, from) {
        console.log(to);
        fetch(`/getTypeTwo?type_one=${to.query.type}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg = res;
            });
    },
};
</script>

<style scoped>
.body {
    width: 1080px;
    margin: 0 auto;
}
.body > div:nth-of-type(1) {
    color: gray;
    font-size: 12px;
    margin: 20px 0;
}
.body > div:nth-of-type(1) span {
    padding-right: 7px;
}
.body > ul:nth-of-type(1) {
    display: flex;
    margin: 20px 0 30px;
    height: 50px;
    line-height: 50px;
    background: #fff;
}
.body > ul:nth-of-type(1) li {
    font-size: 16px;
    color: gray;
    margin-left: 20px;
    cursor: pointer;
}
</style>