<template>
    <ul class="ez_indx">
        <li>
            <i
                style="
                    background: url('https://www.tf2sc.cn/static/img/yingyong.png');
                "
            ></i>
            <!-- https://www.tf2sc.cn/static/img/yingyong1.png -->
            <p>APP</p>
            <div style="display: none">
                <img
                    src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734977.jpg"
                    alt=""
                />
                <span>
                    下载app
                    <br />
                    关注更多信息
                </span>
            </div>
        </li>
        <li>
            <i
                style="
                    background-image: url('https://www.tf2sc.cn/static/img/xiaochengxu.png');
                "
            ></i>
            <!-- https://www.tf2sc.cn/static/img/xiaochengxu1.png -->
            <p>小程序</p>
            <div style="display: none">
                <img
                    src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734976.jpg"
                    alt=""
                />
                <span>
                    扫码打开小程序
                    <br />
                    关注更多信息
                </span>
            </div>
        </li>
        <li>
            <i
                style="
                    background-image: url('https://www.tf2sc.cn/static/img/dianhua.png');
                "
            ></i>
            <!-- https://www.tf2sc.cn/static/img/dianhua1.png -->
            <p>电话</p>
            <div style="display: none">
                <span>400-0606-777</span>
            </div>
        </li>
        <li @click="go_top">
            <i
                style="
                    background-image: url('	https://www.tf2sc.cn/static/img/dingbu.png');
                "
            ></i>
            <!-- https://www.tf2sc.cn/static/img/dingbu1.png -->
            <p>回到顶部</p>
        </li>
    </ul>
</template>

<script setup>
import { ref } from "vue";

let can = ref(true);

let go_top = () => {
    if (can.value) {
        can.value = false;
        setTimeout(() => {
            can.value = true;
        }, 1000);
        let n_height = document.documentElement.scrollTop;
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
};
</script>

<style scoped>
.ez_indx {
    width: 66px;
    background-color: #ffffff;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.ez_indx > li {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    margin-bottom: 31px;
    cursor: pointer;
}
i {
    background-size: 24px 24px;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    margin-bottom: 10px;
}
.ez_indx > li:hover {
    color: #5685fe;
}
.ez_indx > li:nth-of-type(1):hover i {
    background: url("https://www.tf2sc.cn/static/img/yingyong1.png") !important;
}
.ez_indx > li:nth-of-type(2):hover i {
    background: url("https://www.tf2sc.cn/static/img/xiaochengxu1.png") !important;
}
.ez_indx > li:nth-of-type(3):hover i {
    background: url("https://www.tf2sc.cn/static/img/dianhua1.png") !important;
}
.ez_indx > li:nth-of-type(4):hover i {
    background: url("https://www.tf2sc.cn/static/img/dingbu1.png") !important;
}
.ez_indx > li > div {
    position: absolute;
    right: 45px;
    top: 0;
    flex-direction: column;
    width: 140px;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
    background: #ffffff;
    text-align: center;
    display: none;
    font-size: 12px;
    border-radius: 8px;
    color: #000;
}
.ez_indx > li:nth-of-type(1) > div {
    padding: 10px 10px 30px;
}
.ez_indx > li:nth-of-type(2) > div {
    right: 51px;
}
.ez_indx > li:nth-of-type(2) > div > span {
    margin: 10px 0;
}
.ez_indx > li:nth-of-type(3) > div {
    width: 140px;
    padding: 20px 0;
    font-size: 14px;
    color: #5685fe;
}
.ez_indx > li:hover div {
    display: flex !important;
}
</style>