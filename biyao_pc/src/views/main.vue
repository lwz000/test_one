<template>
    <div class="body">
        <div>
            <router-link to="/">首页</router-link>
            >
            <span>{{ msg.title }}</span>
        </div>
        <div>
            <div>
                <img :src="JSON.parse(this.msg.imgs)[0]" alt="" />
                <ul>
                    <li>
                        <img
                            src="http://static3.biyao.com/pc/common/img/master/policy-icon.png?v=biyao_238b758"
                            alt=""
                        />
                        七天无忧退货
                    </li>
                    <li>
                        <img
                            src="http://static3.biyao.com/pc/common/img/master/policy-icon.png?v=biyao_238b758"
                            alt=""
                        />
                        先行赔付
                    </li>
                    <li>
                        <img
                            src="http://static3.biyao.com/pc/common/img/master/policy-icon.png?v=biyao_238b758"
                            alt=""
                        />
                        超时赔偿
                    </li>
                    <li>
                        <img
                            src="http://static3.biyao.com/pc/common/img/master/policy-icon.png?v=biyao_238b758"
                            alt=""
                        />
                        顺丰包邮
                    </li>
                </ul>
            </div>
            <ul>
                <li>{{ msg.title }}</li>
                <li>{{ msg.salePoint }}</li>
                <li>{{ msg.supplier }}</li>
                <li>
                    售价<span>￥{{ msg.priceStr }}</span> 生产周期<span
                        >{{ msg.leadTime }}天</span
                    >
                </li>
                <li v-if="msg.sizeList != '[]'" class="size">
                    规格
                    <span
                        v-for="(i, index) in JSON.parse(msg.sizeList)"
                        :key="i"
                        :class="index == num ? 'show' : ''"
                        @click="num = index"
                        >{{ i }}</span
                    >
                </li>
                <li>立刻购买</li>
            </ul>
        </div>
    </div>
    <div class="main"></div>
</template>

<script>
export default {
    data() {
        return {
            msg: {},
            list: [],
            num: 0,
        };
    },
    methods: {
        getshop(x) {
            fetch(`/sameList?supplier=${x}`)
                .then((r) => r.json())
                .then((res) => {
                    console.log(res);
                    this.list = res;
                    console.log(this.list);
                });
        },
    },
    created() {
        fetch(`/detail?goodId=${this.$route.query.id}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg = res[0];

                this.getshop(res[0].supplier);
            });
    },
};
</script>

<style scoped>
div {
    background-color: #fff;
}
.body {
    box-shadow: inset 0px 2px 1px 0px #0000001e;
    padding-top: 5px;
}
.body > div:nth-of-type(1) {
    width: 1080px;
    margin: 20px auto;
    font-size: 14px;
}
.body > div:nth-of-type(2) {
    width: 1080px;
    margin: 0 auto;
    display: flex;
}
.body > div:nth-of-type(2) > div {
    margin-right: 50px;
}
.body > div:nth-of-type(2) > div > img {
    height: 460px;
    width: 460px;
}
.body > div:nth-of-type(2) > div > ul {
    display: flex;
    width: 100%;
    font-size: 12px;
    padding: 10px 0;
}
.body > div:nth-of-type(2) > div > ul > li {
    display: flex;
    align-items: center;
}
.body > div:nth-of-type(2) > div > ul img {
    margin: 0 10px;
}
.body > div:nth-of-type(2) > ul {
    font-size: 14px;
}
.body > div:nth-of-type(2) > ul > li:nth-of-type(1) {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    margin-bottom: 14px;
}
.body > div:nth-of-type(2) > ul > li:nth-of-type(2) {
    font-size: 14px;
    color: #999;
    margin-bottom: 14px;
}
.body > div:nth-of-type(2) > ul > li:nth-of-type(3) {
    position: relative;
    display: inline-block;
    height: 24px;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 2px;
    background-color: #f7f1e8;
    font-size: 12px;
    line-height: 24px;
    color: #bf9e6b;
    cursor: pointer;
}
.body > div:nth-of-type(2) > ul > li:nth-of-type(4) {
    overflow: hidden;
    border-top: 1px solid #ccc;
    padding-top: 15px;
}
.body > div:nth-of-type(2) > ul > li:nth-of-type(4) span {
    font-weight: 400;
    padding: 0 20px;
}
.body > div:nth-of-type(2) > ul > li:nth-of-type(4) span:nth-of-type(1) {
    font-size: 24px;
    color: red;
}
.body > div:nth-of-type(2) > ul > li:last-of-type {
    width: 180px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    background: #523669;
    cursor: pointer;
    margin: 40px auto 0;
}
.size {
    margin: 20px 0;
}
.size > span {
    position: relative;
    display: inline-block;
    margin: 0 6px 15px 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    height: 33px;
    line-height: 33px;
    padding: 0 23px;
    font-size: 14px;
}
.show {
    border: 1px solid #523669 !important;
    background-image: url("http://static1.biyao.com/pc/common/img/master/specs-active.png?v=biyao_99d793b");
    background-repeat: no-repeat;
    background-position: bottom right;
}
</style>