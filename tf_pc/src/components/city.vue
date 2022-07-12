<template>
    <p @click="show = !show" style="font-size: 14px">{{ city_in }}</p>
    <div class="cover" v-show="show">
        <div>
            <div>
                <i></i>
                <p>选择城市</p>
                <img
                    src="	https://www.tf2sc.cn/static/img/Shape.png"
                    alt=""
                    @click="show = false"
                />
            </div>
            <div>
                <ul>
                    <li>#</li>
                    <li v-for="(i, index) in all_city" :key="i">{{ index }}</li>
                </ul>
                <ul>
                    <li>
                        <p>#</p>
                        <div>
                            <div>
                                <span
                                    :class="num == 0 ? 'click_it' : ''"
                                    @click="num = 0"
                                    >全国</span
                                >
                            </div>
                        </div>
                    </li>
                    <li v-for="(i, index) in all_city" :key="i">
                        <p>{{ index }}</p>
                        <div>
                            <div v-for="item in i" :key="item">
                                <span
                                    :class="
                                        num == item.cityId ? 'click_it' : ''
                                    "
                                    @click="num = item.cityId"
                                    >{{ item.name }}</span
                                >
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <span @click="change_city">确定</span>
                <span @click="show = false">取消</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
let all_city = ref([]);
let show = ref(false);
let num = ref(0);
let city_in = ref("全国");

fetch("https://www.tf2sc.cn/static/lib/citytest.json")
    .then((r) => r.json())
    .then((res) => {
        all_city.value = res;
    });

let change_city = () => {
    city_in.value = document.getElementsByClassName("click_it")[0].innerText;
    show.value = false;
};
</script>

<style scoped>
p {
    cursor: pointer;
}
.cover {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.301);
}
.cover > div {
    width: 900px;
    margin: 100px auto;
    background-color: #fff;
}
.cover > div > div:nth-of-type(1) {
    width: 100%;
    height: 74px;
    box-sizing: border-box;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    line-height: 20px;
    color: #333333;
}
.cover > div > div:nth-of-type(1) p {
    cursor: default;
}
.cover > div > div:nth-of-type(1) img {
    cursor: pointer;
}
.cover > div > div:nth-of-type(2) {
    display: flex;
}
.cover > div > div:nth-of-type(2) > ul:nth-of-type(1) {
    box-sizing: border-box;
    text-align: center;
    line-height: 20px;
    padding-top: 30px;
    font-size: 12px;
    color: #333333;
    border-right: 1px solid rgba(159, 167, 199, 0.3);
    width: 38px;
    height: 524px;
}
.cover > div > div:nth-of-type(3) {
    width: 900px;
    height: 76px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px -2px 6px 0px rgb(0 18 103 / 7%);
    border: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cover > div > div:nth-of-type(3) > span {
    width: 72px;
    height: 40px;
    background: #5685fe;
    border-radius: 4px;
    color: #ffffff;
    border: none;
    margin-right: 20px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
}
.cover > div > div:nth-of-type(3) > span:nth-of-type(2) {
    background: #ffffff;
    border: 1px solid #dbdbdb;
    color: #666666;
}
.cover > div > div:nth-of-type(2) > ul:nth-of-type(2) {
    width: 860px;
    height: 524px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.cover > div > div:nth-of-type(2) > ul:nth-of-type(2) p {
    padding-left: 20px;
    width: 861px;
    height: 24px;
    box-sizing: border-box;
    background: #eff2f9;
    opacity: 0.5;
}
.cover > div > div:nth-of-type(2) > ul:nth-of-type(2) > li > div {
    padding: 14px 0 20px 0;
    width: 861px;
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.cover > div > div:nth-of-type(2) > ul:nth-of-type(2) > li > div > div {
    width: 205px;
}
.cover > div > div:nth-of-type(2) > ul:nth-of-type(2) > li > div > div > span {
    display: inline-block;
    padding: 7px 20px;
    cursor: pointer;
    font-size: 14px;
}
.click_it {
    color: rgb(86, 133, 254);
    background: rgb(245, 247, 254);
}
</style>