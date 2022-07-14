<template>
    <div class="car_main">
        <div>
            <div class="demo-image__preview">
                <el-image
                    style="width: 600px; height: 400px; border-radius: 10px"
                    :src="srcList[url_index]"
                    :preview-src-list="srcList"
                    :initial-index="4"
                    fit="fill"
                />
            </div>
            <ul>
                <li v-for="(i, index) in srcList" :key="i">
                    <img
                        :src="i"
                        alt=""
                        @mouseenter="change_img(index)"
                        @mouseleave="run(index)"
                    />
                </li>
            </ul>
        </div>
        <ul>
            <li v-if="msg.carId">车架号:{{ msg.carId }}</li>
            <li v-if="msg.carName">{{ msg.carName }}</li>
            <li>
                <ul v-if="msg.parameterVo">
                    <li v-if="msg.dateOfRegistration">
                        <span
                            >{{
                                msg.dateOfRegistration
                                    .split("T")[0]
                                    .split("-")[0]
                            }}年{{
                                msg.dateOfRegistration
                                    .split("T")[0]
                                    .split("-")[1]
                            }}月</span
                        >
                        <span>上牌时间</span>
                    </li>
                    <li>
                        <span>{{ msg.mileage }}万公里</span>
                        <span>公里数</span>
                    </li>
                    <li>
                        <span>{{ msg.parameterVo.carColor }}</span>
                        <span>车身颜色</span>
                    </li>
                    <li>
                        <span>{{ msg.parameterVo.gearbox }}</span>
                        <span>变速箱</span>
                    </li>
                    <li>
                        <span>{{ msg.displacement }}L</span>
                        <span>排量</span>
                    </li>
                    <li>
                        <span>{{ msg.parameterVo.fuel }}</span>
                        <span>燃油方式</span>
                    </li>
                    <li>
                        <span>{{ msg.parameterVo.emissionStandard }}</span>
                        <span>排放标准</span>
                    </li>
                    <li v-if="msg.parameterVo.deliveryTime">
                        <span
                            >{{
                                msg.parameterVo.deliveryTime
                                    .split("T")[0]
                                    .split("-")[0]
                            }}年{{
                                msg.parameterVo.deliveryTime
                                    .split("T")[0]
                                    .split("-")[1]
                            }}月</span
                        >
                        <span>出厂日期</span>
                    </li>
                    <li>
                        <span>{{ msg.parameterVo.carTransfer }}</span>
                        <span>过户次数</span>
                    </li>
                </ul>
            </li>
            <li v-if="msg.priceVo">
                <span>{{ msg.priceVo.caHallPrice }}万</span>
                <del>新车价：{{ msg.priceVo.carNetPrice }}万</del>
                <p>
                    为您节约<span>{{
                        (
                            msg.priceVo.carNetPrice - msg.priceVo.caHallPrice
                        ).toFixed(2)
                    }}</span
                    >万
                </p>
            </li>
            <li v-if="msg.priceVo">
                <img src="https://www.tf2sc.cn/static/img/anjie.png" alt="" />
                <span>灵活按揭</span>
                <p>
                    首付<span>30%</span>，月供
                    <span>{{ msg.priceVo.monthlyRepayment }}元</span>（{{
                        msg.priceVo.mortgageNum
                    }}）期
                </p>
            </li>
            <li>
                <button>在线资讯</button>
                <button>联系电话</button>
            </li>
        </ul>
    </div>
    <ul class="car_other" ref="box">
        <li>
            <p>车辆描述</p>
            <span>暂无描述</span>
            <div>
                <p>//<span>服务承诺</span>//</p>
                <ul>
                    <li>
                        <img
                            src="https://www.tf2sc.cn/static/img/ketui.png"
                            alt=""
                        />
                        <p>7天无理由可退</p>
                    </li>
                    <li>
                        <img
                            src="https://www.tf2sc.cn/static/img/kehuan.png"
                            alt=""
                        />
                        <p>15天可换</p>
                    </li>
                    <li>
                        <img
                            src="https://www.tf2sc.cn/static/img/zhibao.png"
                            alt=""
                        />
                        <p>终身质保</p>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <p>检测报告</p>
            <img src="https://www.tf2sc.cn/static/img/baogao.png" alt="" />
            <ul>
                <li>
                    <p>基本信息核查</p>
                    <p>
                        <img
                            src="https://www.tf2sc.cn/static/img/tongguo.png"
                            alt=""
                        />已检测
                    </p>
                </li>
                <li>
                    <p>动力系统检测</p>
                    <p>
                        <img
                            src="https://www.tf2sc.cn/static/img/tongguo.png"
                            alt=""
                        />已检测
                    </p>
                </li>
                <li>
                    <p>车身外观检测</p>
                    <p>
                        <img
                            src="https://www.tf2sc.cn/static/img/tongguo.png"
                            alt=""
                        />已检测
                    </p>
                </li>
                <li>
                    <p>功能部件检测</p>
                    <p>
                        <img
                            src="https://www.tf2sc.cn/static/img/tongguo.png"
                            alt=""
                        />已检测
                    </p>
                </li>
                <li>
                    <p>重大事故排查</p>
                    <p>
                        <img
                            src="https://www.tf2sc.cn/static/img/tongguo.png"
                            alt=""
                        />已检测
                    </p>
                </li>
                <li></li>
            </ul>
            <div>
                <img
                    src="https://www.tf2sc.cn/api/tfcar/share/inspectionReport/202107151725080963"
                    alt=""
                />
                <div>
                    <p>微信扫码查看<span>完整</span>检测报告</p>
                    <p><span>1</span>打开微信</p>
                    <p><span>2</span>点击页面右上角“+”，打开扫一扫</p>
                </div>
            </div>
        </li>
        <li v-if="msg.photoVo">
            <p>车辆图片</p>
            <img
                :src="i"
                alt=""
                v-for="i in msg.photoVo.detail.split(',')"
                :key="i"
            />
        </li>
        <li>
            <p>同类推荐</p>
            <little_car></little_car>
        </li>
    </ul>
    <main_index
        :index="car_index"
        @change_index="change_index"
        v-show="box_show"
    ></main_index>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import little_car from "../components/little_list.vue";
import main_index from "../components/main_index.vue";
let msg = ref([]);
let url_index = ref(0);
let srcList = ref([]);
let router = useRouter();
let route = useRoute();
let id = ref(route.query.id);
let car_index = ref(0);
let box_show = ref(true);
let can_click = ref(true);
let box = ref();

let change_index = (x) => {
    //点击跳转
    let h = 0;
    if (x == 0) {
        h = document.documentElement.scrollTop;
    } else {
        h =
            document.documentElement.scrollTop -
            box.value.children[x].offsetTop +
            50;
    }
    if (can_click.value) {
        can_click.value = false;

        let v = h / 30;
        let zhen = 0;
        let timer = setInterval(() => {
            document.documentElement.scrollTop -= v;
            zhen++;
            if (zhen >= 30) {
                clearInterval(timer);
            }
        }, 16.7);
        setTimeout(() => {
            can_click.value = true;
        }, 500);
    }
};

onMounted(() => {
    //绑定滚动事件
    window.addEventListener("scroll", () => {
        if (!box.value) {
            return;
        }
        for (let i = 0; i < box.value.children.length; i++) {
            if (
                box.value.children[i].offsetTop <
                document.documentElement.scrollTop + 101
            ) {
                car_index.value = i;
            }
        }
        if (
            document.documentElement.scrollTop + 100 <
            box.value.children[0].offsetTop
        ) {
            box_show.value = false;
        } else {
            box_show.value = true;
        }
    });
});

// 请求数据
let getlist = (x) => {
    srcList.value.length = 0;
    fetch(`https://api.tf2sc.cn/api/tfcar/car/basicInfo/${x}`, {
        headers: { PlatformType: "h5" },
    })
        .then((r) => r.json())
        .then((res) => {
            msg.value = res.data;
            for (const i of res.data.photoVo.carousel.split(",")) {
                srcList.value.push(i);
            }
        });
};
getlist(id.value);

//移入暂停轮播，更换图片
let change_img = (x) => {
    clearInterval(img_timer);
    url_index.value = x;
};

// 移出继续轮播
let run = (x) => {
    img_timer = setInterval(() => {
        url_index.value++;
        if (url_index.value > srcList.value.length - 1) {
            url_index.value = 0;
        }
    }, 3000);
};

// 自动轮播
let img_timer = setInterval(() => {
    url_index.value++;
    if (url_index.value > srcList.value.length - 1) {
        url_index.value = 0;
    }
}, 3000);

onBeforeRouteUpdate((to, from, next) => {
    getlist(to.query.id);
    document.documentElement.scrollTop = 0;
    next();
});
</script>

<style scoped>
del {
    color: #666666;
    text-decoration: line-through;
    margin-right: 10px;
}
.demo-image__error .image-slot {
    font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
    font-size: 30px;
}
.demo-image__error .el-image {
    width: 100%;
    height: 200px;
}
.car_main {
    width: 1200px;
    margin: 20px auto;
    display: flex;
}
.car_main > div > ul {
    display: flex;
    margin-top: 10px;
}
.car_main > div > ul img {
    width: 100px;
    margin-right: 20px;
    border-radius: 8px;
    cursor: pointer;
}
.car_main > ul {
    margin-left: 20px;
    color: #333333;
    overflow: hidden;
}
.car_main > ul > li:nth-of-type(1) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 20px;
}
.car_main > ul > li:nth-of-type(2) {
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
    margin-top: 30px;
}
.car_main > ul > li:nth-of-type(3) > ul {
    width: 578px;
    height: 138px;
    background: #f9f9f9;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin-top: 20px;
}
.car_main > ul > li:nth-of-type(3) > ul > li {
    display: flex;
    flex-direction: column;
    height: 44px;
    font-size: 16px;
    margin-bottom: 30px;
    margin-right: 12px;
    width: 98px;
    position: relative;
}
.car_main > ul > li:nth-of-type(3) > ul > li > span:last-of-type {
    font-size: 12px;
    color: #999999;
    margin-top: 4px;
}
.car_main > ul > li:nth-of-type(3) > ul > li::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 44px;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0px;
    left: -13px;
}
.car_main > ul > li:nth-of-type(4) {
    margin-top: 40px;
    font-size: 14px;
    display: flex;
    align-items: center;
}
.car_main > ul > li:nth-of-type(4) > span {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    color: #e73424;
    margin-right: 10px;
}
.car_main > ul > li:nth-of-type(4) > p {
    font-weight: 600;
}
.car_main > ul > li:nth-of-type(4) > p > span {
    color: #f5994f;
}
.car_main > ul > li:nth-of-type(5) {
    width: 578px;
    height: 40px;
    background: linear-gradient(297deg, #fff8f3 0%, #ffede0 100%);
    margin-top: 12px;
    position: relative;
    display: flex;
    align-items: center;
}
.car_main > ul > li:nth-of-type(5) > img {
    width: 19.71px;
    height: 19.71px;
    margin-left: 7px;
    margin-right: 6px;
}
.car_main > ul > li:nth-of-type(5) > span {
    font-size: 14px;
}
.car_main > ul > li:nth-of-type(5) > p {
    margin-left: 30px;
    font-size: 14px;
}
.car_main > ul > li:nth-of-type(5) > p > span {
    color: #f5994f;
}
.car_main > ul > li:nth-of-type(5)::after {
    content: "";
    position: absolute;
    top: -14px;
    left: 9px;
    border: 7px solid rgba(255, 255, 255, 0);
    border-bottom: 7px solid #ffede0;
}
.car_main > ul > li:nth-of-type(6) {
    margin-top: 68px;
}
.car_main > ul > li:nth-of-type(6) > button {
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
    border: none;
    cursor: pointer;
}
.car_main > ul > li:nth-of-type(6) > button:nth-of-type(1) {
    width: 140px;
    height: 48px;
    background: #3298fc;
    box-shadow: 0px 2px 16px 0px rgb(43 125 242 / 40%);
    border-radius: 4px;
}
.car_main > ul > li:nth-of-type(6) > button:nth-of-type(2) {
    width: 278px;
    height: 48px;
    background: #2567ff;
    box-shadow: 0px 4px 16px 0px rgb(88 136 255 / 40%);
    border-radius: 4px;
    margin-left: 30px;
    cursor: inherit;
}
.car_other {
    width: 1200px;
    margin: 30px auto 20px;
}
.car_other > li {
    margin-bottom: 30px;
}
.car_other > li > p:nth-of-type(1) {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 20px;
    padding-left: 20px;
    border-left: 10px solid #5685fe;
}
.car_other > li:nth-of-type(1) > div {
    margin: 0 auto;
    width: 1000px;
    height: 208px;
    background-image: url("https://www.tf2sc.cn/static/img/chengnuo.png");
    background-repeat: no-repeat;
}
.car_other > li:nth-of-type(1) > div > p {
    color: #f3d7a9;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    width: 100%;
}
.car_other > li:nth-of-type(1) > div > p > span {
    margin: 0 20px;
}
.car_other > li:nth-of-type(1) > div > ul {
    margin-top: 48px;
    font-size: 16px;
    color: #f3ddb4;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.car_other > li:nth-of-type(1) > div > ul > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 333px;
}
.car_other > li:nth-of-type(1) > div > ul > li > p {
    margin-top: 20px;
}
.car_other > li:nth-of-type(2) > img {
    width: 1000px;
    margin: 10px auto 20px;
    display: block;
}
.car_other > li:nth-of-type(2) > ul {
    margin: 30px 140px 0 140px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    position: relative;
}
.car_other > li:nth-of-type(2) > ul > li {
    display: flex;
    width: 372px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
}
.car_other > li:nth-of-type(2) > ul > li:nth-child(2n-1) {
    margin-right: 176px;
}
.car_other > li:nth-of-type(2) > ul > li > p {
    display: flex;
    align-items: center;
}
.car_other > li:nth-of-type(2) > ul > li:last-of-type {
    width: 100%;
    height: 47px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.02) 0%,
        #ffffff 100%
    );
    position: absolute;
    top: 47px;
    left: 0;
    z-index: 1;
}
.car_other > li:nth-of-type(2) > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 20px;
}
.car_other > li:nth-of-type(2) > div > img {
    width: 190px;
    height: 190px;
    border-radius: 8px;
    border: 1px solid #979797;
}
.car_other > li:nth-of-type(2) > div > div {
    margin-left: 20px;
    position: relative;
}
.car_other > li:nth-of-type(2) > div > div > p {
    display: flex;
}
.car_other > li:nth-of-type(2) > div > div > p:nth-of-type(1) {
    font-size: 24px;
    font-weight: 600;
    color: #222222;
    line-height: 32px;
}
.car_other > li:nth-of-type(2) > div > div > p:nth-of-type(1) > span {
    color: #5685fe;
}
.car_other > li:nth-of-type(2) > div > div > p:nth-of-type(2) {
    margin: 30px 0 40px;
}
.car_other > li:nth-of-type(2) > div > div > p:nth-of-type(2) > span {
    text-align: center;
    margin-right: 20px;
    width: 24px;
    height: 24px;
    background-color: #3298fc;
    border-radius: 50%;
    font-weight: 600;
    color: #fff;
}
.car_other > li:nth-of-type(2) > div > div > p:nth-of-type(3) > span {
    text-align: center;
    margin-right: 20px;
    width: 24px;
    height: 24px;
    background-color: #3298fc;
    border-radius: 50%;
    font-weight: 600;
    color: #fff;
}
.car_other > li:nth-of-type(2) > div > div::after {
    content: "";
    position: absolute;
    left: 11px;
    top: 86px;
    width: 2px;
    height: 40px;
    background-color: #3298fc;
}
.car_other > li:nth-of-type(3) > img {
    width: 590px;
    height: 394px;
    border-radius: 4px;
    margin: 10px 0;
}
.car_other > li:nth-of-type(3) > img:nth-of-type(2n-1) {
    margin-right: 20px;
}
</style>