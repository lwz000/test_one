<template>
    <div
        class="help_index"
        style="
            background-image: url('https://www.tf2sc.cn/static/img/learnTengfa_main.jpg');
        "
    >
        <div>
            <p>
                腾发二手车
                <i></i>
                <span>TENGFA</span>
            </p>
            <p>
                <img src="https://www.tf2sc.cn/static/img/left.png" alt="" />
                买亏可退、7天无理由退车、15天可换、终身质保
                <img src="https://www.tf2sc.cn/static/img/right.png" alt="" />
            </p>
            <ul>
                <router-link to="/helper">了解腾发</router-link>
                <router-link to="/helper/after_sell">售后服务</router-link>
                <router-link to="/helper/change_car">汽车改装</router-link>
                <router-link to="/helper/insure">保险服务</router-link>
            </ul>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
</script>

<style scoped>
.help_index {
    background-repeat: no-repeat;
    background-position: center center;
}
.help_index > div {
    width: 1200px;
    margin: 0 auto;
    height: 600px;
    text-align: center;
}
.help_index > div > p:nth-of-type(1) {
    padding-top: 200px;
    font-size: 44px;
    font-weight: 500;
    color: #ffffff;
    line-height: 62px;
    position: relative;
}
.help_index > div > p:nth-of-type(1) > span {
    position: absolute;
    right: 440px;
    bottom: 20px;
    font-size: 60px;
    font-weight: 600;
    color: #e9ebf4;
    line-height: 84px;
    opacity: 0.1;
}
.help_index > div > p:nth-of-type(1) > i {
    position: absolute;
    left: 580px;
    bottom: -10px;
    width: 60px;
    height: 6px;
    background: #ffffff;
    border-radius: 4px;
}
.help_index > div > p:nth-of-type(2) {
    display: flex;
    font-size: 28px;
    font-weight: 400;
    color: #ffffff;
    line-height: 40px;
    padding-top: 34px;
    justify-content: center;
}
.help_index > div > p:nth-of-type(2) > img {
    padding: 0 20px;
}
ul {
    margin-top: 204px;
    width: 1200px;
    height: 60px;
    background: #f2f4fb;
    border-radius: 8px 8px 0px 0px;
    display: flex;
}
ul > a {
    width: 132px;
    height: 60px;
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    line-height: 60px;
    background: #ffffff;
    color: #222;
    border-radius: 8px 8px 0px 0px;
    background-color: rgb(242, 244, 251);
    cursor: pointer;
    border: none;
}
.router-link-active {
    border: none !important;
}
.router-link-exact-active {
    background-color: #fff;
    color: #5685fe;
}
</style>