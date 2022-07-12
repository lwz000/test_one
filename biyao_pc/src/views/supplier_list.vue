<template>
    <div class="body">
        <div>
            <span @click="$router.push('/')" style="cursor: pointer">首页</span>
            <span>></span>
            <span>{{ $route.query.supplier }}</span>
        </div>
        <div>
            <div>
                <img :src="img" alt="" />
                <span>{{ $route.query.supplier }}</span>
            </div>
            <div>
                <span
                    >商品质量: <span>⭐⭐⭐⭐⭐</span> <span>5.0分</span>
                </span>
                <span
                    >服务态度: <span>⭐⭐⭐⭐⭐</span> <span>5.0分</span>
                </span>
            </div>
        </div>
        <eve_type :type_two="i" :key="i"></eve_type>
    </div>
</template>

<script>
import eve_type from "../components/list_com.vue";
export default {
    data() {
        return {
            msg: [],
            img: "",
        };
    },
    methods: {
        go(x) {
            this.msg = [x];
        },
    },
    created() {
        fetch(`/detail?goodId=${this.$route.query.id}`)
            .then((r) => r.json())
            .then((res) => {
                this.img = res[0].addressLogo;
            });
    },
    components: {
        eve_type,
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
.body > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
}
.body > div:nth-of-type(2) img {
    width: 100px;
    margin-right: 20px;
}
.body > div:nth-of-type(2) > div {
    display: flex;
    align-items: center;
}
.body > div:nth-of-type(2) > div:nth-of-type(1) {
    font-size: 24px;
}
.body > div:nth-of-type(2) > div:nth-of-type(2) {
    flex-direction: column;
    font-size: 14px;
    color: #666;
    flex-wrap: 400;
    vertical-align: middle;
}
.body > div:nth-of-type(2) > div:nth-of-type(2) > span > span:nth-of-type(2) {
    color: #f49f26;
    margin-left: 20px;
}
</style>