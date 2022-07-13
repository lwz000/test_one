<template>
    <ul>
        <li v-for="i in list" :key="i">
            <i :style="color(i.saleType)">{{ tip(i.saleType) }}</i>
            <img :src="i.cover" alt="" />
            <p>{{ i.carName }}</p>
            <p>
                <span>{{ date(i.dateOfRegistration) }}</span
                >/
                <span>{{ i.mileage }}万公里</span>
            </p>
            <p>{{ i.currentPrice }}万</p>
        </li>
    </ul>
    <!-- <div v-show="list.length == 0" class="no_list">
        <img src="https://www.tf2sc.cn/static/img/zanwu.png" alt="" />
        <p>找不到内容，换个关键词试试吧~</p>
    </div> -->
</template>

<script setup>
import { ref, onUpdated, watch } from "vue";
let list = ref([]);
let msg = defineProps([
    //各种参数
    "page", //页数
    "carSeries", //品牌车系
    "carModel", //车型
    "currentPrices", //价格
    "displacements", //排量
    "driveType", //驱动类型
    "emissionStandardType", //排放
    "fuelType", //燃油类型
    "gearboxType", //变速箱
    "mileages", //里程
    "seat", //座位数
    "sort", //排序
    "saleType", //类型
    "carName", //车名
]);
let getlist = () => {
    let ajax = ""; //拼接所有参数
    for (const i in msg) {
        if (msg[i] && i != "all_condition") {
            if (msg["seat"] == 7) {
                ajax += "seatGe=7";
                continue;
            }
            ajax += i + "=" + msg[i] + "&";
        }
    }

    fetch(`https://api.tf2sc.cn/api/tfcar/car/list?${ajax}`, {
        //请求数据
        headers: { PlatformType: "h5" },
    })
        .then((r) => r.json())
        .then((res) => {
            list.value = res.data.content;
        });
};

getlist();
let date = (x) => {
    //日期
    let num = new Date(x);
    return (
        num.getFullYear() +
        "年" +
        (num.getMonth() > 9 ? num.getMonth() + 1 : "0" + (num.getMonth() + 1)) +
        "月"
    );
};

let tip = (x) => {
    //标签
    let text = "";
    switch (x) {
        case 0:
            text = "腾发自营";
            break;
        case 1:
            text = "车主直售";
            break;
        case 2:
            text = "限时特惠";
            break;
        case 3:
            text = "车主严选";
            break;
    }
    return text;
};

let color = (x) => {
    //颜色
    let text = "";
    switch (x) {
        case 0:
            text =
                "background:linear-gradient(90deg, #FF8856 0%, #FF4725 100%);";
            break;
        case 1:
            text =
                "background:linear-gradient(90deg, #5F98F6 0%, #2E68EB 100%);";
            break;
        case 2:
            text =
                "background:linear-gradient(90deg, #FF1766 0%, #FF2A23 100%);";
            break;
        case 3:
            text =
                "background:linear-gradient(90deg, #4DD4D4 0%, #0CBFCD 100%);";
            break;
    }
    return text;
};

watch(
    msg,
    (nv, lv) => {
        getlist();
    },
    {
        immediate: true,
        deep: true,
    }
);
</script>

<style scoped>
ul {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
}
ul > li {
    width: 275px;
    margin: 0 33px 30px 0;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 15%);
    cursor: pointer;
    overflow: hidden;
    position: relative;
}
ul > li:nth-of-type(4n) {
    margin-right: 0 !important;
}
ul > li:hover {
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 50%);
    transition: all 0.5s;
}
ul > li:hover p:nth-of-type(1) {
    color: #5685fe;
}
ul > li img {
    width: 100%;
    height: 208px;
    border-radius: 8px 8px 0 0;
}
ul > li > p {
    font-size: 18px;
    margin-left: 10px;
}
ul > li > p:nth-of-type(1) {
    width: 257px;
    line-height: 26px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 20px;
}
ul > li > p:nth-of-type(2) {
    font-size: 14px;
    color: #999999;
    line-height: 20px;
    margin-bottom: 20px;
}
ul > li > p:nth-of-type(3) {
    color: #e73424;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    margin-right: 10px;
    margin-bottom: 30px;
}
ul i {
    position: absolute;
    left: 0;
    top: 188px;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    width: 64px;
    height: 20px;
    border-radius: 0px 4px 0px 0px;
}
.no_list {
    width: 1200px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
}
.no_list > img {
    width: 282px;
    margin-bottom: 30px;
}
</style>