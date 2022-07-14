<template>
    <div class="find_ipt">
        <input type="text" placeholder="搜索品牌、车型" v-model="find" />
        <button
            @click="
                scr_list.push({ 关键词: find });
                find = '';
            "
        >
            搜索
        </button>
    </div>
    <div class="screen_body">
        <span
            @click="show = !show"
            :style="
                show
                    ? 'background-image: url(https://www.tf2sc.cn/static/img/shang.png)'
                    : 'background-image: url(https://www.tf2sc.cn/static/img/xia.png)'
            "
            >{{ show ? "收起" : "全部" }}</span
        >
        <div>
            <p>品牌：</p>
            <ul>
                <li :class="pp == 0 ? 'show_index' : ''" @click="pp = 0">
                    不限
                </li>
                <li
                    v-for="i in carseries"
                    :key="i"
                    :class="pp == i.brand ? 'show_index' : ''"
                    @click="pp = i.brand"
                >
                    {{ i.brand }}
                </li>
            </ul>
        </div>
        <ul v-show="show">
            <template v-for="(i, index) in all_type" :key="i">
                <li>
                    <p>{{ index }}</p>
                    <ul>
                        <li
                            v-for="item in i"
                            :key="item"
                            @click="pp = item"
                            :class="pp == item ? 'show_index' : ''"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </li>
            </template>
        </ul>
        <div>
            <p>车型：</p>
            <ul>
                <li :class="cx == 0 ? 'show_index' : ''" @click="cx = 0">
                    不限
                </li>
                <li
                    v-for="i in model"
                    :key="i"
                    :class="cx == i.model ? 'show_index' : ''"
                    @click="cx = i.model"
                >
                    {{ i.model }}
                </li>
            </ul>
        </div>
        <div>
            <p>价格：</p>
            <ul>
                <li :class="jz == 0 ? 'show_index' : ''" @click="jz = 0">
                    不限
                </li>
                <li
                    v-for="i in pic"
                    :key="i"
                    :class="jz == i.label ? 'show_index' : ''"
                    @click="jz = i.label"
                >
                    {{ i.label }}
                </li>
            </ul>
        </div>
    </div>
    <div class="sxl" v-show="scr_list != 0">
        <span>当前筛选:</span>
        <ul>
            <li v-for="(i, index) in scr_list" :key="i">
                <p>
                    {{ Object.keys(i)[0] }}:<span>{{
                        i[Object.keys(i)[0]]
                    }}</span>
                </p>
                <img
                    src="https://www.tf2sc.cn/static/img/guanbi.png"
                    alt=""
                    @click="scr_list.splice(index, 1)"
                />
            </li>
        </ul>
        <span>
            <img
                src="https://www.tf2sc.cn/static/img/shanchu.png"
                alt=""
                style="margin-right: 5px"
            />
            重置条件</span
        >
    </div>
    <div class="sort">
        <ul>
            <li :class="sale_in == -1 ? 'sale_show' : ''" @click="sale_in = -1">
                全部
            </li>
            <li :class="sale_in == 0 ? 'sale_show' : ''" @click="sale_in = 0">
                腾发自营
            </li>
            <li :class="sale_in == 1 ? 'sale_show' : ''" @click="sale_in = 1">
                车主直售
            </li>
            <li :class="sale_in == 2 ? 'sale_show' : ''" @click="sale_in = 2">
                限时秒杀
            </li>
            <li :class="sale_in == 3 ? 'sale_show' : ''" @click="sale_in = 3">
                严选车源
            </li>
        </ul>
        <ul>
            <li :class="sort_in == '' ? 'sort_show' : ''" @click="sort_in = ''">
                默认排序
            </li>
            <li
                :class="sort_in == 'uTime,desc' ? 'sort_show' : ''"
                @click="sort_in = 'uTime,desc'"
            >
                最新发布
            </li>
            <li
                :class="sort_in == 'currentPrice,desc' ? 'sort_show' : ''"
                @click="sort_in = 'currentPrice,desc'"
            >
                价格最高
            </li>
            <li
                :class="sort_in == 'currentPrice,asc' ? 'sort_show' : ''"
                @click="sort_in = 'currentPrice,asc'"
            >
                价格最低
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
let show = ref(false);
let all_type = ref({});
let carseries = ref([]);
let pic = ref([]);
let model = ref([]);
let sale_in = ref(-1);
let sort_in = ref("");
let scr_list = ref([]);
let find = ref();

let pp = ref(0);
let cx = ref(0);
let jz = ref(0);

//全部类型
fetch("https://api.tf2sc.cn/api/tfcar/car/brand300", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        let num = "";
        for (const i of res.data.content) {
            if (num != i.brand.split("-")[0].trim()) {
                all_type.value[i.brand.split("-")[0].trim()] = [];
                num = i.brand.split("-")[0].trim();
            }
            all_type.value[i.brand.split("-")[0].trim()].push(
                i.brand.split("-")[1].trim()
            );
        }
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

watch([pp, cx, jz], (nv, lv) => {
    scr_list.value.length = 0;
    if (pp.value) {
        scr_list.value.push({ 品牌: pp.value });
    }
    if (cx.value) {
        scr_list.value.push({ 车型: cx.value });
    }
    if (jz.value) {
        scr_list.value.push({ 价格: jz.value });
    }
});
</script>

<style scoped>
.screen_body {
    width: 1200px;
    margin: 0 auto;
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
    background-repeat: no-repeat;
    background-position: 30px 3px;
}
.screen_body > div {
    display: flex;
}
.screen_body > div > ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    align-items: center;
}
.screen_body > div > ul > li {
    margin-left: 20px;
    padding: 0 10px;
    line-height: 20px;
    cursor: pointer;
}
.show_index {
    color: #ffffff;
    background-color: #5685fe;
}
.screen_body > ul {
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    height: 895px;
    flex-wrap: wrap;
}
.screen_body > ul > li {
    display: flex;
    width: 365px;
}
.screen_body > ul > li > p {
    color: #5685fe;
    margin-right: 10px;
    line-height: 20px;
}
.screen_body > ul > li > ul {
    display: flex;
    flex-wrap: wrap;
}
.screen_body > ul > li > ul > li {
    display: flex;
    align-items: center;
    padding: 0 5px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}
.sort {
    width: 1200px;
    margin: 30px auto 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
}
.sort > ul {
    display: flex;
}
.sort > ul:nth-of-type(1) > li {
    font-size: 18px;
    line-height: 32px;
    font-weight: 600;
    margin-right: 30px;
    border-bottom: 4px solid #fafafa;
    cursor: pointer;
}
.sort > ul:nth-of-type(2) {
    width: 307px;
    height: 40px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 0;
}
.sort > ul:nth-of-type(2) > li {
    display: block;
    width: 76px;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
}
.sale_show {
    color: #5685fe;
    border-bottom: 4px solid #5685fe !important;
}
.sort_show {
    color: #5685fe;
}
.sxl {
    width: 1200px;
    margin: 0 auto 30px;
    display: flex;
    align-items: center;
    font-size: 14px;
}
.sxl > span:last-of-type {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #666666;
    margin-left: 20px;
    margin-right: 30px;
}
.sxl > ul {
    flex-wrap: wrap;
    display: flex;
    width: 1000px;
}
.sxl > ul > li {
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #ffffff;
    height: 34px;
    margin: 5px 5px 5px 0;
}
.sxl > ul > li > p {
    display: flex;
    align-items: center;
}
.sxl > ul > li > p > span {
    color: rgb(86, 133, 254);
    margin-right: 10px;
}
.sxl > ul > li > img {
    cursor: pointer;
}
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
</style>