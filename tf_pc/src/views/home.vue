<template>
    <div class="find_box">
        <div>
            <span>腾发二手车</span>
            <div>
                <input type="text" placeholder="搜索品牌、车型" />
                <button @click="router.push('/used_car')">搜索</button>
            </div>
            <img
                src="https://www.tf2sc.cn/static/img/%E5%8D%96%E8%BD%A6%E7%9A%84%E5%A5%BD%E5%A4%84.png"
                alt=""
            />
            <div>
                <ul>
                    <li>我要买车</li>
                    <li v-for="i in buy_type" :key="i">
                        <p
                            v-for="item in i"
                            :key="item"
                            @click="router.push('/used_car')"
                        >
                            <img :src="item.logo" alt="" v-if="item.logo" />
                            <span>{{ item.label }}</span>
                        </p>
                    </li>
                </ul>
                <ul>
                    <li>我要卖车</li>
                    <li>
                        <input type="text" placeholder="请输入手机号" />
                        <button @click="router.push('/sell_car')">
                            立刻估值
                        </button>
                    </li>
                    <li>
                        <p>
                            <img
                                src="https://www.tf2sc.cn/static/img/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1.png"
                                alt=""
                            />
                            <span>全国代购</span>
                        </p>
                        <p>
                            <img
                                src="https://www.tf2sc.cn/static/img/%E5%88%B0%E5%BA%97%E4%BC%B0%E5%80%BC.png"
                                alt=""
                            />
                            <span>到店估值</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="title">
        <p>二手车</p>
        <span @click="router.push('/used_car')"
            >查看更多
            <img
                src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
                alt=""
            />
        </span>
    </div>
    <car_list :page="'1'"></car_list>
    <div class="title">
        <p>新车</p>
        <span @click="router.push('/new_car')"
            >查看更多
            <img
                src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
                alt=""
            />
        </span>
    </div>
    <div class="title">
        <p>新闻资讯</p>
        <span @click="router.push('/news')"
            >查看更多
            <img
                src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
                alt=""
            />
        </span>
    </div>
    <new_list></new_list>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import car_list from "../components/car_list.vue";
import new_list from "../components/new_list.vue";

let buy_type = ref([]); //买车类型
let router = useRouter();

fetch("https://api.tf2sc.cn/api/tfcar/car/convenient", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        buy_type.value = res.data;
    });
</script>

<style scoped>
.find_box {
    background-image: url("https://www.tf2sc.cn/static/img/%E8%93%9D%E8%89%B2%E8%83%8C%E6%99%AF.png");
    background-repeat: no-repeat;
    background-position: -100px 0;
}
.find_box > div {
    width: 1200px;
    margin: 0 auto;
    padding-top: 74px;
    position: relative;
}
.find_box > div > img {
    position: absolute;
    right: 0;
    top: 49px;
}
.find_box > div > span {
    margin-bottom: 20px;
    line-height: 50px;
    font-size: 40px;
    font-weight: 600;
    background-image: -webkit-linear-gradient(top, #f9edd5, #f5cb4f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.find_box > div > div:nth-of-type(1) {
    margin: 20px 0;
    display: flex;
    align-items: center;
}
.find_box > div > div:nth-of-type(1) > input {
    border: none;
    padding: 5px 20px;
    box-sizing: border-box;
    width: 490px;
    height: 56px;
    font-size: 18px;
    border-radius: 10px 0 0 10px;
}
.find_box > div > div:nth-of-type(1) > button {
    border: 1px solid #fff;
    padding: 5px 20px;
    box-sizing: border-box;
    height: 56px;
    font-size: 18px;
    width: 115px;
    border-radius: 0px 10px 10px 0px;
    background-color: #5685fe;
    color: #fff;
    cursor: pointer;
}
.find_box > div > div:nth-of-type(2) {
    margin-top: 50px;
    border-radius: 15px;
    padding-top: 50px;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
    background-image: url("https://www.tf2sc.cn/static/img/%E6%88%91%E8%A6%81%E5%8D%96%E8%BD%A6.png");
    background-repeat: no-repeat;
    background-position: 1000px 120px;
}
.find_box > div > div:nth-of-type(2) > ul > li:nth-of-type(1) {
    border-left: 10px solid #5685fe;
    line-height: 32px;
    font-weight: 600;
    font-size: 24px;
    padding-left: 20px;
}
.find_box > div > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) {
    margin: 0 0 30px;
}
.find_box > div > div:nth-of-type(2) > ul:nth-of-type(1) > li {
    display: flex;
    margin-left: 40px;
}
.find_box > div > div:nth-of-type(2) > ul:nth-of-type(1) > li img {
    width: 30px;
    height: 30px;
    margin-right: 12px;
}
.find_box
    > div
    > div:nth-of-type(2)
    > ul:nth-of-type(1)
    > li:nth-of-type(2)
    > P {
    justify-content: flex-start;
    background-color: #fff;
}
.find_box > div > div:nth-of-type(2) > ul:nth-of-type(1) > li > p {
    display: flex;
    align-items: center;
    margin-right: 30px;
    margin-bottom: 30px;
    font-size: 14px;
    cursor: pointer;
    width: 90px;
    height: 34px;
    background: #f5f7fe;
    border-radius: 17px;
    line-height: 34px;
    justify-content: center;
}
.find_box > div > div:nth-of-type(2) > ul:nth-of-type(2) > li:nth-of-type(2) {
    width: 330px;
    box-sizing: border-box;
    background: #ffffff;
    display: flex;
    align-items: center;
    margin: 20px 20px 40px;
}
.find_box
    > div
    > div:nth-of-type(2)
    > ul:nth-of-type(2)
    > li:nth-of-type(2)
    > input {
    border: 1px solid #f0f0f0;
    padding-left: 20px;
    height: 40px;
    width: 200px;
    border-radius: 8px 0 0 8px;
}
.find_box
    > div
    > div:nth-of-type(2)
    > ul:nth-of-type(2)
    > li:nth-of-type(2)
    > button {
    width: 96px;
    height: 42px;
    background: #5685fe;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid #f0f0f0;
    color: #ffffff;
    cursor: pointer;
}
.find_box > div > div:nth-of-type(2) > ul:nth-of-type(2) > li:nth-of-type(3) {
    margin-left: 20px;
    width: 330px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 1px 10px 0px rgb(170 170 216 / 40%);
    border-radius: 7px;
    display: flex;
    align-items: center;
    position: relative;
}
.find_box
    > div
    > div:nth-of-type(2)
    > ul:nth-of-type(2)
    > li:nth-of-type(3)
    > p {
    display: flex;
    align-items: center;
    width: 164px;
    justify-content: center;
    line-height: 20px;
}
.find_box
    > div
    > div:nth-of-type(2)
    > ul:nth-of-type(2)
    > li:nth-of-type(3)
    img {
    margin-right: 5px;
}
.find_box
    > div
    > div:nth-of-type(2)
    > ul:nth-of-type(2)
    > li:nth-of-type(3)::after {
    content: "";
    position: absolute;
    left: 165px;
    top: 15px;
    height: 30px;
    width: 1px;
    background-color: #ccc;
}
.title {
    width: 1200px;
    margin: 75px auto 50px;
    display: flex;
    justify-content: space-between;
}
.title > p {
    line-height: 32px;
    font-weight: 600;
    font-size: 24px;
    padding-left: 20px;
    border-left: 10px solid #5685fe;
    color: #666;
}
.title > span {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666666;
    cursor: pointer;
}
</style>