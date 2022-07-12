<template>
    <div class="body">
        <div>
            <span @click="$router.push('/')" style="cursor: pointer">首页</span>
            <span>></span>
            <span>全部分类</span>
            <span>></span>
            <span>{{ $route.query.word }}</span>
        </div>
        <div>
            {{
                do_have
                    ? "根据您搜索的'" +
                      $route.query.word +
                      "',为您匹配到以下商品"
                    : "您搜索的商品还未上架"
            }}
        </div>
        <eve_type :type_two="i" :key="i" :a_msg="msg"></eve_type>
    </div>
</template>

<script>
import eve_type from "../components/list_com.vue";
export default {
    data() {
        return {
            msg: [],
            do_have: true,
            img: "",
        };
    },
    methods: {
        go(x) {
            this.msg = [x];
        },
    },
    created() {
        fetch(`/search?word=${this.$route.query.word}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg.length = 0;
                for (const i of res) {
                    this.msg.push(i);
                }
                if (res.length == 0) {
                    this.do_have = false;
                }
            });
    },
    components: {
        eve_type,
    },
    beforeRouteUpdate(to, from, next) {
        fetch(`/search?word=${to.query.word}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg.length = 0;
                for (const i of res) {
                    this.msg.push(i);
                }
                if (res.length == 0) {
                    this.do_have = false;
                } else {
                    this.do_have = true;
                }
            });
        // this.$router.replace();
        next();
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