<template>
    <ul class="title_car">
        <template v-for="(i, index) in list">
            <li v-if="index < 4" :key="i" @click="other(i.ind)">
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
        </template>
    </ul>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, onBeforeRouteUpdate, useRoute } from "vue-router";
let router = useRouter();
let route = useRoute();
let id = ref(route.query.id);
let list = ref([]);

let getlist = (x) => {
    fetch(`https://api.tf2sc.cn/api/tfcar/car/similarRecommendation/${x}`, {
        headers: { PlatformType: "h5" },
    })
        .then((r) => r.json())
        .then((res) => {
            list.value = res.data;
        });
};
getlist(id.value);

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

let other = (x) => {
    router.push(`/main?id=${x}`);
};

onBeforeRouteUpdate((to, from, next) => {
    getlist(to.query.id);
    next();
});
</script>

<style scoped>
.title_car {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
}
.title_car > li {
    width: 275px;
    margin: 0 33px 30px 0;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 15%);
    cursor: pointer;
    overflow: hidden;
    position: relative;
}
.title_car > li:nth-of-type(4n) {
    margin-right: 0 !important;
}
.title_car > li:hover {
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 50%);
    transition: all 0.5s;
}
.title_car > li:hover p:nth-of-type(1) {
    color: #5685fe;
}
.title_car > li img {
    width: 100%;
    height: 208px;
    border-radius: 8px 8px 0 0;
}
.title_car > li > p {
    font-size: 18px;
    margin-left: 10px;
}
.title_car > li > p:nth-of-type(1) {
    width: 257px;
    line-height: 26px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 20px;
}
.title_car > li > p:nth-of-type(2) {
    font-size: 14px;
    color: #999999;
    line-height: 20px;
    margin-bottom: 20px;
}
.title_car > li > p:nth-of-type(3) {
    color: #e73424;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    margin-right: 10px;
    margin-bottom: 30px;
}
.title_car i {
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
</style>