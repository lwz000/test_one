<template>
    <div class="body">
        <div>
            <router-link to="/">首页</router-link>
            >
            <span>{{ msg[0].title }}</span>
        </div>
        <div>
            <div>
                <img :src="JSON.parse(this.msg[0].imgs)[0]" alt="" />
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
                <li>{{ msg[0].title }}</li>
                <li>{{ msg[0].salePoint }}</li>
                <li
                    @click="
                        $router.push(
                            `/supplierList?supplier=${msg[0].supplier}&id=${$route.query.id}`
                        )
                    "
                >
                    {{ msg[0].supplier }}
                </li>
                <li>
                    售价<span>￥{{ msg[0].priceStr }}</span> 生产周期<span
                        >{{ msg[0].leadTime }}天</span
                    >
                </li>
                <li class="size">
                    规格
                    <span
                        v-for="(i, index) in JSON.parse(msg[0].sizeList)"
                        :key="i"
                        :class="index == num ? 'show' : ''"
                        @click="num = index"
                        >{{ i }}</span
                    >
                </li>
                <li @click="buy(msg[0].Id)">立刻购买</li>
            </ul>
        </div>
    </div>
    <div class="main" ref="main">
        <div class="shop">
            <p
                @click="
                    $router.push(
                        `/supplierList?supplier=${msg[0].supplier}&id=${$route.query.id}`
                    )
                "
            >
                <img
                    src="	http://static2.biyao.com/pc/common/img/master/supplier-icon.png?v=biyao_c57f462"
                    alt=""
                />{{ msg[0].supplier }}
            </p>
            <div>
                <img :src="msg[0].addressLogo" alt="" />
                <div>
                    <span>商品质量:<span>5.0</span></span>
                    <span>服务态度:<span>5.0</span></span>
                </div>
            </div>
            <span
                @click="
                    $router.push(
                        `/supplierList?supplier=${msg[0].supplier}&id=${$route.query.id}`
                    )
                "
                >进店看看</span
            >
            <ul>
                <li v-for="i in list" :key="i" @click="go_other(i.Id)">
                    <img :src="i.imageUrl" alt="" />
                    <p>{{ i.title }}</p>
                    <p>{{ i.salePoint }}</p>
                    <p>
                        ￥{{ i.priceStr
                        }}<span ref="tip" :data-tip="i.mack"></span>
                    </p>
                    <p>
                        {{
                            i.evaluate > 10000
                                ? i.evaluate / 10000 + "w"
                                : i.evaluate
                        }}+条好评
                    </p>
                </li>
            </ul>
        </div>
        <div class="cut_box">
            <div ref="route_main">
                <span @click="go(0)" :class="index == 0 ? 'index' : ''"
                    >商品详情</span
                >
                <span @click="go(1)" :class="index == 1 ? 'index' : ''"
                    >评论详情</span
                >
            </div>
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: {},
            list: [],
            num: 0,
            index: 0,
            can: true,
        };
    },
    methods: {
        buy(x) {
            fetch(
                `/add?token=${localStorage.getItem(
                    "token"
                )}&userId=${localStorage.getItem("username")}&goodId=${x}`
            )
                .then((r) => r.json())
                .then((res) => {
                    console.log(res);
                    if (res.code == 1) {
                        alert("添加成功");
                    } else {
                        alert("添加失败");
                    }
                });
        },
        getshop(x) {
            fetch(`/sameList?supplier=${x}`)
                .then((r) => r.json())
                .then((res) => {
                    this.list = res;
                });
        },
        getmain(id) {
            fetch(`/detail?goodId=${id}`)
                .then((r) => r.json())
                .then((res) => {
                    this.msg = res;
                    this.getshop(res[0].supplier);
                });
        },
        go(y) {
            if (this.can) {
                this.can = false;
                setTimeout(() => {
                    this.can = true;
                }, 1000);
                let n_height =
                    document.documentElement.scrollTop -
                    this.$refs.main.offsetTop;
                let v = n_height / 30;
                let zhen = 0;
                let timer = setInterval(() => {
                    document.documentElement.scrollTop -= v;
                    zhen++;
                    if (zhen >= 30) {
                        clearInterval(timer);
                    }
                }, 16.7);
            }

            this.index = y;

            if (y == 0) {
                this.$router.push(`/main?id=${this.$route.query.id}`);
            }
            if (y == 1) {
                this.$router.push(`/main/say?id=${this.$route.query.id}`);
            }
        },
        go_other(id) {
            this.$router.push(`/main?id=${id}`);
            this.index = 0;
            this.getmain(id);
            document.documentElement.scrollTop = 0;
        },
    },
    created() {
        this.getmain(this.$route.query.id);
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
.main {
    display: flex;
    background-color: #fff;
    justify-content: center;
}
.shop {
    width: 240px;
    box-sizing: border-box;
    position: relative;
}
.shop img {
    width: 200px;
}
.shop > p {
    position: sticky;
    top: 0;
    z-index: 1;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    background-color: #eeecef;
    cursor: pointer;
}
.shop > p > img {
    width: 20px;
    margin-right: 10px;
}
.shop > div {
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-evenly;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.shop > div img {
    width: 75px;
    height: 75px;
    border: 1px solid #ccc;
}
.shop > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 12px;
}
.shop > div > div span > span {
    color: #f7b200;
    padding-left: 10px;
}
.shop > ul {
    border: 1px solid #ccc;
}
.shop > ul > li {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}
.shop > ul > li:last-of-type {
    border: none;
}
.shop > span {
    display: block;
    width: 200px;
    padding: 10px 0;
    text-align: center;
    margin: 0 auto 20px;
    background: #f7b200;
    color: #fff;
    cursor: pointer;
    position: relative;
}
.shop > span::after {
    content: "";
    position: absolute;
    left: -20px;
    top: 0px;
    width: 238px;
    height: 61px;
    border: 1px solid #ccc;
    border-top: #fff;
}
.shop > ul > li > p:nth-of-type(1) {
    font-size: 14px;
    line-height: 19px;
    color: #4a4a4a;
    margin-top: 15px;
}
.shop > ul > li > p:nth-of-type(2) {
    font-size: 12px;
    line-height: 17px;
    color: #bf9e6b;
    margin-top: 5px;
}
.shop > ul > li > p:nth-of-type(3) {
    font-size: 18px;
    line-height: 25px;
    height: 25px;
    color: #f7a701;
    margin-top: 10px;
    display: flex;
}
.shop > ul > li > p:nth-of-type(3) > span {
    font-size: 12px;
}
.shop > ul > li > p:nth-of-type(4) {
    font-size: 12px;
    line-height: 17px;
    color: #bbb;
    margin-top: 10px;
}
.cut_box {
    width: 840px;
    position: relative;
}
.cut_box > div:nth-of-type(1) {
    border: 1px solid #ccc;
    height: 61px;
    border-left: none;
    display: flex;
    background-color: #eeecef;
    position: sticky;
    top: 0;
}
.cut_box > div:nth-of-type(1) > span {
    height: 61px;
    text-align: center;
    line-height: 61px;
    width: 180px;
    color: #333;
    font-size: 16px;
    border-right: 1px solid #ccc;
}
.index {
    background: #fff;
    color: #523669;
    position: relative;
}
.index::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 180px;
    height: 2px;
    background-color: #8600d1;
}
</style>