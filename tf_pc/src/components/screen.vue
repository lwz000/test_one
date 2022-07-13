<template>
    <div class="find_ipt">
        <input type="text" placeholder="搜索品牌、车型" />
        <button>搜索</button>
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
        <ul>
            <li>品牌：</li>
            <li
                :class="carseries_in == '' ? 'show opt' : 'opt'"
                @click="change_carseries(0)"
            >
                不限
            </li>
            <li
                v-for="i in carseries"
                :key="i"
                data-tp="品牌"
                :class="carseries_in == i.id ? 'show opt' : 'opt'"
                @click="change_carseries(i.id, i.brand)"
            >
                {{ i.brand }}
            </li>
        </ul>
        <div v-show="show">
            <template v-for="(i, index) in all_type" :key="i">
                <div>
                    <p>{{ index }}</p>
                    <ul>
                        <li
                            v-for="item in i"
                            :key="item"
                            :class="
                                carseries_in == item.split('-')[1]
                                    ? 'show opt'
                                    : 'opt'
                            "
                            data-tp="品牌"
                            @click="
                                change_carseries(
                                    item.split('-')[1],
                                    item.split('-')[0]
                                )
                            "
                        >
                            {{ item.split("-")[0] }}
                        </li>
                    </ul>
                </div>
            </template>
        </div>
        <ul>
            <li>车系：</li>
            <li
                :class="brand_in == '' ? 'opt show' : 'opt'"
                @click="change_brand(0)"
            >
                不限
            </li>
            <li
                v-for="i in brand"
                :key="i"
                data-tp="车系"
                :class="brand_in == i.id ? 'opt show' : 'opt'"
                @click="change_brand(i.id, i.series)"
            >
                {{ i.series }}
            </li>
        </ul>
        <ul>
            <li>车型：</li>
            <li
                :class="model_in == '' ? 'show opt' : 'opt'"
                @click="chang_model(0)"
            >
                不限
            </li>
            <li
                v-for="i in model"
                :key="i"
                data-tp="车型"
                :class="model_in == i.id ? 'show opt' : 'opt'"
                @click="chang_model(i.id, i.model)"
            >
                {{ i.model }}
            </li>
        </ul>
        <ul>
            <li>价格：</li>
            <li
                :class="pic_in == '' ? 'show opt' : 'opt'"
                @click="chang_pic('')"
            >
                不限
            </li>
            <li
                v-for="i in pic"
                :key="i"
                :class="pic_in == i.queryRules ? 'show opt' : 'opt'"
                data-tp="价格"
                @click="chang_pic(i.queryRules, i.label)"
            >
                {{ i.label }}
            </li>
            <li>
                <div>
                    <input type="text" placeholder="输入金额" ref="min_pic" />
                    <span>—</span>
                    <input
                        type="text"
                        placeholder="输入金额"
                        style="margin-right: 5px"
                        ref="max_pic"
                    />万
                </div>
                <button @click="chang_pic('')">确认</button>
            </li>
        </ul>
        <ul ref="more_box">
            <li>更多：</li>
            <li v-for="i in more" :key="i">
                <select
                    @click="chang_more($event, i[0].attrZh)"
                    :data-tp="i[0].attrZh"
                >
                    <option hidden>{{ i[0].attrZh }}</option>
                    <option :value="item.label" v-for="item in i" :key="item">
                        {{ item.label }}
                    </option>
                </select>
            </li>
        </ul>
    </div>

    <div class="condition_box" v-show="all_condition.length != 0">
        <p>当前筛选：</p>
        <ul>
            <template v-for="(i, index) in all_condition" :key="i">
                <li v-if="Object.keys(i)[0] != '品牌'">
                    <p>
                        {{ Object.keys(i)[0] }}：
                        <span style="color: #5685fe; margin-right: 10px">{{
                            i[Object.keys(i)]
                        }}</span>
                    </p>
                    <img
                        src="https://www.tf2sc.cn/static/img/guanbi.png"
                        alt=""
                        @click="all_condition.splice(index, 1)"
                    />
                </li>
            </template>
        </ul>
        <p>
            <img
                src="https://www.tf2sc.cn/static/img/shanchu.png"
                alt=""
                style="margin-right: 5px"
            />
            <span @click="clear()">重置条件</span>
        </p>
    </div>

    <div class="sort">
        <ul>
            <li
                :class="sale_in == -1 ? 'sale_show' : ''"
                @click="change_sale(-1)"
            >
                全部
            </li>
            <li
                :class="sale_in == 0 ? 'sale_show' : ''"
                @click="change_sale(0)"
            >
                腾发自营
            </li>
            <li
                :class="sale_in == 1 ? 'sale_show' : ''"
                @click="change_sale(1)"
            >
                车主直售
            </li>
            <li
                :class="sale_in == 2 ? 'sale_show' : ''"
                @click="change_sale(2)"
            >
                限时秒杀
            </li>
            <li
                :class="sale_in == 3 ? 'sale_show' : ''"
                @click="change_sale(3)"
            >
                严选车源
            </li>
        </ul>
        <ul>
            <li
                :class="sort_in == '' ? 'sort_show' : ''"
                @click="change_sort('')"
            >
                默认排序
            </li>
            <li
                :class="sort_in == 'uTime,desc' ? 'sort_show' : ''"
                @click="change_sort('uTime,desc')"
            >
                最新发布
            </li>
            <li
                :class="sort_in == 'currentPrice,desc' ? 'sort_show' : ''"
                @click="change_sort('currentPrice,desc')"
            >
                价格最高
            </li>
            <li
                :class="sort_in == 'currentPrice,asc' ? 'sort_show' : ''"
                @click="change_sort('currentPrice,asc')"
            >
                价格最低
            </li>
        </ul>
    </div>
    <car_list
        :all_condition="all_condition"
        :carSeries="brand_in"
        :carModel="model_in"
        :sort="sort_in"
        :currentPrices="pic_text"
        :saleType="sale_in == -1 ? '' : `${sale_in}`"
        :displacements="displacements_text"
        :emissionStandardType="emissionStandardType_text"
        :gearboxType="gearboxType_text"
        :driveType="driveType_text"
        :fuelType="fuelType_text"
        :seat="seat_text"
    ></car_list>
</template>

<script setup>
import car_list from "../components/car_list.vue";
import { ref, watch, onUpdated, onMounted } from "vue";
let carseries = ref([]); //品牌
let brand = ref([]); // 车系
let model = ref([]); //车型
let pic = ref([]); //价格
let more = ref([]); // 更多筛选
let all_type = ref({}); //类型
let show = ref(false);
let all_condition = ref([]); //筛选条件
let more_box = ref([]);

//选中
let carseries_in = ref(""); //品牌选中
let brand_in = ref(""); //车系选中
let model_in = ref(""); //车型选中
let pic_in = ref(""); //价格选中
let max_pic = ref(""); //价格最大
let min_pic = ref(""); //价格最小
let sale_in = ref(-1); // 车辆类型
let sort_in = ref(""); //车辆排序

//传输的参数
let pic_text = ref();
let displacements_text = ref();
let emissionStandardType_text = ref();
let gearboxType_text = ref();
let driveType_text = ref();
let fuelType_text = ref();
let seat_text = ref();

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
                i.brand.split("-")[1].trim() + "-" + i.id
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
        // queryRules
        pic.value = res.data;
    });
//车型
fetch("https://api.tf2sc.cn/api/tfcar/car/model", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        // id
        model.value = res.data.content;
    });
//更多
fetch("https://api.tf2sc.cn/api/tfcar/car/moreScreen", {
    headers: { PlatformType: "h5" },
})
    .then((r) => r.json())
    .then((res) => {
        // queryRules
        more.value = res.data;
    });

//车系
let get_series = () => {
    fetch(
        `https://api.tf2sc.cn/api/tfcar/car/series300?brandId=${carseries_in.value}`,
        {
            headers: { PlatformType: "h5" },
        }
    )
        .then((r) => r.json())
        .then((res) => {
            if (res.data) {
                brand.value = res.data.content;
            }
        });
};
get_series();

//品牌点击
let change_carseries = (x, y) => {
    brand_in.value = "";
    show.value = false;
    carseries_in.value = x;
    get_series();

    for (const [index, item] of all_condition.value.entries()) {
        if (Object.keys(item) == "车系") {
            all_condition.value.splice(index, 1);
        }
    }

    if (y) {
        if (all_condition.value.length == 0) {
            all_condition.value.push({ 品牌: y });
        } else {
            for (const [index, item] of all_condition.value.entries()) {
                if (Object.keys(item) == "品牌") {
                    all_condition.value.splice(index, 1, { 品牌: y });
                    return;
                }
            }
            all_condition.value.push({ 品牌: y });
        }
    } else {
        for (const [index, item] of all_condition.value.entries()) {
            if (Object.keys(item) == "品牌") {
                all_condition.value.splice(index, 1);
            }
        }
    }
};

//车系点击
let change_brand = (x, y) => {
    brand_in.value = x;
    if (y) {
        if (all_condition.value.length == 0) {
            all_condition.value.push({ 车系: y });
        } else {
            for (const [index, item] of all_condition.value.entries()) {
                if (Object.keys(item) == "车系") {
                    all_condition.value.splice(index, 1, { 车系: y });
                    return;
                }
            }
            all_condition.value.push({ 车系: y });
        }
    } else {
        for (const [index, item] of all_condition.value.entries()) {
            if (Object.keys(item) == "车系") {
                all_condition.value.splice(index, 1);
            }
        }
    }
};

//车型点击
let chang_model = (x, y) => {
    model_in.value = x;
    if (y) {
        if (all_condition.value.length == 0) {
            all_condition.value.push({ 车型: y });
        } else {
            for (const [index, item] of all_condition.value.entries()) {
                if (Object.keys(item) == "车型") {
                    all_condition.value.splice(index, 1, { 车型: y });
                    return;
                }
            }
            all_condition.value.push({ 车型: y });
        }
    } else {
        for (const [index, item] of all_condition.value.entries()) {
            if (Object.keys(item) == "车型") {
                all_condition.value.splice(index, 1);
            }
        }
    }
};
//价格点击
let chang_pic = (x, y) => {
    if (
        x == "" &&
        min_pic.value.value != "" &&
        max_pic.value.value != "" &&
        min_pic.value.value < max_pic.value.value
    ) {
        pic_in.value = "";
        for (const [index, item] of all_condition.value.entries()) {
            if (Object.keys(item)[0] == "价格") {
                all_condition.value.splice(index, 1, {
                    价格:
                        min_pic.value.value + "-" + max_pic.value.value + "万",
                });
                return;
            }
        }
        all_condition.value.push({
            价格: min_pic.value.value + "-" + max_pic.value.value + "万",
        });
        return;
    } else {
        min_pic.value.value = "";
        max_pic.value.value = "";
        pic_in.value = x;
    }
    if (y) {
        if (all_condition.value.length == 0) {
            all_condition.value.push({ 价格: y });
        } else {
            for (const [index, item] of all_condition.value.entries()) {
                if (Object.keys(item) == "价格") {
                    all_condition.value.splice(index, 1, { 价格: y });
                    return;
                }
            }
            all_condition.value.push({ 价格: y });
        }
    } else {
        for (const [index, item] of all_condition.value.entries()) {
            if (Object.keys(item) == "价格") {
                all_condition.value.splice(index, 1);
            }
        }
    }
};

//切换车辆类型
let change_sale = (x) => {
    sale_in.value = x;
};
//切换排序类型
let change_sort = (x) => {
    sort_in.value = x;
};
//点击更多
let chang_more = (e, x) => {
    let y = e.target.value;
    if (x == y) {
        return;
    }

    for (const [index, i] of all_condition.value.entries()) {
        if (Object.keys(i)[0] == x) {
            all_condition.value.splice(index, 1);
            switch (x) {
                case "排量":
                    all_condition.value.splice(index, 0, { 排量: y });
                    break;
                case "排放":
                    all_condition.value.splice(index, 0, { 排放: y });
                    break;
                case "里程":
                    all_condition.value.splice(index, 0, { 里程: y });
                    break;
                case "变速箱":
                    all_condition.value.splice(index, 0, { 变速箱: y });
                    break;
                case "驱动类型":
                    all_condition.value.splice(index, 0, { 驱动类型: y });
                    break;
                case "燃油类型":
                    all_condition.value.splice(index, 0, { 燃油类型: y });
                    break;
                case "座位数":
                    all_condition.value.splice(index, 0, { 座位数: y });
                    break;
            }
            return;
        }
    }

    switch (x) {
        case "排量":
            all_condition.value.push({ 排量: y });
            break;
        case "排放":
            all_condition.value.push({ 排放: y });
            break;
        case "里程":
            all_condition.value.push({ 里程: y });
            break;
        case "变速箱":
            all_condition.value.push({ 变速箱: y });
            break;
        case "驱动类型":
            all_condition.value.push({ 驱动类型: y });
            break;
        case "燃油类型":
            all_condition.value.push({ 燃油类型: y });
            break;
        case "座位数":
            all_condition.value.push({ 座位数: y });
            break;
    }
};
//清空
let clear = () => {
    location.reload();
};

watch(all_condition.value, (nv, lv) => {
    for (const item of more_box.value.children) {
        //遍历全部选择
        if (item.children[0]) {
            //排除更多
            var have = 0; //记录是否存在
            for (const i of all_condition.value) {
                //遍历筛选栏的值

                if (item.children[0].dataset.tp == Object.keys(i)) {
                    //如果存在则加
                    have++;
                }
            }
            if (have == 0) {
                //循环结束没有加则设为默认值
                item.children[0].value = item.children[0].dataset.tp;
            }
        }
    }
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    for (const item of all_condition.value) {
        switch (Object.keys(item)[0]) {
            case "品牌":
                n1++;
                break;
            case "车系":
                n2++;
                break;
            case "车型":
                n3++;
                break;
            case "价格":
                n4++;
                break;
        }
    }
    if (n1 == 0) {
        carseries_in.value = "";
    }
    if (n2 == 0) {
        brand_in.value = "";
    }
    if (n3 == 0) {
        model_in.value = "";
    }
    if (n4 == 0) {
        pic_in.value = "";
    }

    pic_text.value = "";
    if (pic_in.value) {
        //价格
        if (JSON.parse(pic_in.value)["currentPriceLt"]) {
            pic_text.value = "0&currentPrices=10";
            return;
        }
        if (JSON.parse(pic_in.value)["currentPrices"]) {
            pic_text.value =
                JSON.parse(pic_in.value)["currentPrices"][0] +
                "&currentPrices=" +
                JSON.parse(pic_in.value)["currentPrices"][1];
            return;
        }
        if (JSON.parse(pic_in.value)["currentPriceGe"]) {
            pic_text.value = "100&currentPrices=999";
            return;
        }
    }

    displacements_text.value = "";
    emissionStandardType_text.value = "";
    emissionStandardType_text.value = "";
    gearboxType_text.value = "";
    driveType_text.value = "";
    fuelType_text.value = "";
    seat_text.value = "";
    for (const item of nv) {
        switch (Object.keys(item)[0]) {
            case "价格":
                pic_text.value =
                    item["价格"].split("万")[0].split("-")[0] +
                    "&currentPrices=" +
                    item["价格"].split("万")[0].split("-")[1];
                break;
            case "排量":
                if (
                    item["排量"].split("L")[0].split("-")[0] == "1.0" &&
                    !item["排量"].split("L")[0].split("-")[1]
                ) {
                    displacements_text.value = "0&displacements=1";
                    return;
                }
                if (item["排量"].split("L")[0].split("-")[0] == "4.0") {
                    displacements_text.value = "4&displacements=10";
                    return;
                }

                displacements_text.value =
                    item["排量"].split("L")[0].split("-")[0] +
                    "&displacements=" +
                    item["排量"].split("L")[0].split("-")[1];
                break;
            case "排放":
                switch (item["排放"]) {
                    case "国三":
                        emissionStandardType_text.value = 3;
                        break;
                    case "国四":
                        emissionStandardType_text.value = 4;
                        break;
                    case "国五":
                        emissionStandardType_text.value = 5;
                        break;
                    case "国六":
                        emissionStandardType_text.value = 6;
                        break;
                }
                break;
            case "里程":
                switch (item["里程"]) {
                    case "1万公里以内":
                        emissionStandardType_text.value = "0&mileages=1";
                        break;
                    case "1-3万公里":
                        emissionStandardType_text.value = "1&mileages=3";
                        break;
                    case "3-5万公里":
                        emissionStandardType_text.value = "3&mileages=5";
                        break;
                    case "5-8万公里":
                        emissionStandardType_text.value = "5&mileages=8";
                        break;
                    case "8万公里以上":
                        emissionStandardType_text.value = "8&mileages=999";
                        break;
                }
                break;
            case "变速箱":
                switch (item["变速箱"]) {
                    case "手动":
                        gearboxType_text.value = "0";
                        break;
                    case "自动":
                        gearboxType_text.value = "1";
                        break;
                    case "手自一体":
                        gearboxType_text.value = "2";
                        break;
                }
                break;
            case "驱动类型":
                switch (item["驱动类型"]) {
                    case "前驱":
                        driveType_text.value = "0";
                        break;
                    case "后驱":
                        driveType_text.value = "1";
                        break;
                    case "四驱":
                        driveType_text.value = "2";
                        break;
                }
                break;
            case "燃油类型":
                switch (item["燃油类型"]) {
                    case "汽油":
                        fuelType_text.value = "0";
                        break;
                    case "柴油":
                        fuelType_text.value = "1";
                        break;
                    case "纯电":
                        fuelType_text.value = "2";
                        break;
                    case "油电混合":
                        fuelType_text.value = "3";
                        break;
                }
                break;
            case "座位数":
                switch (item["座位数"]) {
                    case "2座":
                        seat_text.value = "2";
                        break;
                    case "4座":
                        seat_text.value = "4";
                        break;
                    case "5座":
                        seat_text.value = "5";
                        break;
                    case "6座":
                        seat_text.value = "6";
                        break;
                    case "7座及以上":
                        seat_text.value = "7";
                        break;
                }
                break;
        }
    }
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
.screen_body > ul:nth-of-type(2) > li {
    margin-bottom: 20px;
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
.screen_body > div {
    padding: 20px 80px 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 840px;
}
.screen_body > div > div {
    width: 330px;
    display: flex;
    margin-bottom: 10px;
}
.screen_body > div > div > p {
    color: #5685fe;
    margin-right: 10px;
}
.screen_body > div > div > ul {
    display: flex;
    flex-wrap: wrap;
}
.screen_body > div > div > ul > li {
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 0 5px;
}
.screen_body > ul:nth-of-type(2) {
    margin-bottom: 10px;
}
.screen_body > ul:nth-of-type(3) {
    margin-bottom: 20px;
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
.condition_box {
    width: 1200px;
    margin: 0 auto 30px;
    display: flex;
    align-items: center;
    font-size: 14px;
}
.condition_box > ul {
    flex-wrap: wrap;
    display: flex;
    width: 1000px;
}
.condition_box li {
    margin-right: 10px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #ffffff;
    height: 34px;
    margin: 5px 5px 5px 0;
}
.condition_box li > p {
    display: flex;
    align-items: center;
}
.condition_box li img {
    cursor: pointer;
}
.condition_box p:nth-of-type(2) {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #666666;
    margin-left: 20px;
    margin-right: 30px;
}
</style>