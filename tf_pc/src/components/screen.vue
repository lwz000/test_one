<template>
    <div class="find_ipt">
        <input type="text" placeholder="搜索品牌、车型" />
        <button>搜索</button>
    </div>
    <div class="screen_body">
        <span>全部</span>
        <ul>
            <li>品牌：</li>
            <li :class="carseries_in == 0 ? 'show ipt' : 'ipt'">不限</li>
            <li v-for="i in carseries" :key="i" class="opt">
                {{ i.brand }}
            </li>
        </ul>
        <div v-show="show"></div>
        <ul>
            <li>车系：</li>
            <li class="opt show">不限</li>
            <li class="opt">宝马X4 M</li>
        </ul>
        <ul>
            <li>车型：</li>
            <li :class="model_in == 0 ? 'show ipt' : 'ipt'">不限</li>
            <li v-for="i in model" :key="i" class="opt">
                {{ i.model }}
            </li>
        </ul>
        <ul>
            <li>价格：</li>
            <li :class="pic_in == 0 ? 'show ipt' : 'ipt'">不限</li>
            <li v-for="i in pic" :key="i" class="opt">
                {{ i.label }}
            </li>
            <li>
                <div>
                    <input type="text" placeholder="输入金额" />
                    <span>—</span>
                    <input
                        type="text"
                        placeholder="输入金额"
                        style="margin-right: 5px"
                    />万
                </div>
                <button>确认</button>
            </li>
        </ul>
        <ul>
            <li>更多：</li>
            <li v-for="i in more" :key="i">
                <select>
                    <option hidden>{{ i[0].attrZh }}</option>
                    <option :value="item.label" v-for="item in i" :key="item">
                        {{ item.label }}
                    </option>
                </select>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";
let carseries = ref([]);
let pic = ref([]);
let all_type = ref([]);
let model = ref([]);
let more = ref([]);
let show = ref(true);

//选中
let carseries_in = ref(0);
let model_in = ref(0);
let pic_in = ref(0);

let list = [];
//全部类型
fetch("https://api.tf2sc.cn/api/tfcar/car/brand300", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        console.log(res.data.content);

        console.log(list);

        all_type.value = res.data.content;
    });
//品牌
fetch("https://api.tf2sc.cn/api/tfcar/car/customSeries", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        carseries.value = res.data[0].brands;
    });
//价格
fetch("https://api.tf2sc.cn/api/tfcar/car/price?", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        pic.value = res.data;
    });
//车型
fetch("https://api.tf2sc.cn/api/tfcar/car/model", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        model.value = res.data.content;
    });
//更多
fetch("https://api.tf2sc.cn/api/tfcar/car/moreScreen", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        more.value = res.data;
    });
</script>

<style scoped>
.find_ipt {
    width: 1200px;
    margin: 50px auto 20px;
    display: flex;
    align-items: center;
}
.find_ipt > input {
    height: 40px;
    width: 880px;
    box-sizing: border-box;
    padding: 10px 20px;
    border: 1px solid #f0f0f0;
    border-radius: 8px 0px 0px 8px;
}
.find_ipt > button {
    width: 96px;
    height: 40px;
    background: #5685fe;
    box-sizing: border-box;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid #f0f0f0;
    color: #ffffff;
    cursor: pointer;
}
.screen_body {
    width: 1200px;
    margin: 0 auto;
    min-height: 290px;
    box-sizing: border-box;
    padding: 30px 20px 30px 20px;
    background: #ffffff;
    margin-bottom: 20px;
    font-size: 14px;
    position: relative;
}
.screen_body > span {
    position: absolute;
    right: 20px;
    top: 30px;
    color: #5685fe;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    width: 60px;
    background-image: url("https://www.tf2sc.cn/static/img/xia.png");
    background-repeat: no-repeat;
    background-position: 30px 3px;
}
.screen_body > ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    align-items: center;
}
.screen_body > ul > li {
    margin-left: 20px;
    padding: 0 10px;
    line-height: 20px;
}
.screen_body > ul > li:nth-of-type(1) {
    margin: 0;
}
.screen_body > ul:nth-of-type(1) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #333333;
}
.screen_body > ul:nth-of-type(4) > li:last-of-type {
    display: flex;
    padding: 2px;
}
.screen_body > ul:nth-of-type(4) > li:last-of-type:hover {
    border-radius: 4px;
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
}
.screen_body > ul:nth-of-type(4) > li:last-of-type input {
    width: 90px;
    height: 40px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    padding-left: 14px;
}
.screen_body > ul:nth-of-type(4) > li:last-of-type span {
    margin: 0 5px;
}
.screen_body > ul:nth-of-type(4) > li:last-of-type button {
    width: 68px;
    height: 40px;
    background: #f5f7fe;
    border-radius: 4px;
    border: none;
    margin-left: 5px;
    cursor: pointer;
}
.screen_body > ul:nth-of-type(4) > li:last-of-type button:hover {
    background-color: #5685fe;
    color: #ffffff;
}
.screen_body > ul:last-of-type select {
    padding: 13px 10px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
}
.opt {
    cursor: pointer;
}
.opt:hover {
    color: #5685fe;
}
.show {
    color: #ffffff;
    background-color: #5685fe;
}
.show:hover {
    color: #fff;
}
</style>