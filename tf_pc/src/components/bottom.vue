<template>
    <div class="bottom">
        <div class="bottom_index">
            <img src="https://www.tf2sc.cn/static/img/tengfa.png" alt="" />
            <span></span>
            <span>真实车源</span>
            <router-link to="/used_car">二手车</router-link>
            <router-link to="/news">新闻资讯</router-link>
            <router-link to="/helper">常见问题</router-link>
        </div>
        <div class="bottom_box">
            <div>
                <div>
                    <div>
                        <p>咨询电话：400-0606-777</p>
                        <p>营业时间：周一至周日 早 8:00 - 晚 12:00</p>
                    </div>
                    <ul>
                        <li>
                            <img
                                src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734978.jpg"
                                alt=""
                            />
                            <span>
                                关注腾发名车
                                <br />
                                微信公众号
                            </span>
                        </li>
                        <li>
                            <img
                                src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734976.jpg"
                                alt=""
                            />
                            <span>
                                扫码打开小程序
                                <br />
                                关注更多信息
                            </span>
                        </li>
                        <li>
                            <img
                                src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734977.jpg"
                                alt=""
                            />
                            <span>
                                下载app
                                <br />
                                关注更多信息
                            </span>
                        </li>
                    </ul>
                </div>
                <ul>
                    <li>
                        腾发二手车以二手车销售、新车销售、汽车分期、汽车保险、维修保养、汽车改装、汽车收购置换为主营业务，是集实体与线上为一体的综合性购车用车销售服务平台。
                    </li>
                    <li>
                        门店地址：【国基路店】郑州市花园路与国基路交汇处西南角
                        【天伦路店】郑州市花园路与天伦路交汇处向东50米路南
                    </li>
                    <li>
                        腾发二手车目前营业面积3万余平实体展厅，近5000平独立的售后服务中心，3000余台的常态库存涵盖各种国际品牌名车。全国二手车经营示范基地，百万车主信赖之选！
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom_other">
            <p>Copyright © 2014 - 2021 All Rights Reserved 版权所有</p>
            <div>
                <img src="https://www.tf2sc.cn/static/img/cert_01.jpg" alt="" />
                <img src="https://www.tf2sc.cn/static/img/cert_02.jpg" alt="" />
                <img src="https://www.tf2sc.cn/static/img/cert_03.jpg" alt="" />
                <img src="https://www.tf2sc.cn/static/img/cert_04.jpg" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.bottom {
    font-size: 14px;
    color: #d4d4d4;
    background-color: #242632;
}
.bottom_index {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    height: 70px;
    align-items: center;
}
.bottom_index > span:nth-of-type(1) {
    width: 1px;
    height: 21px;
    background: #dee3ec;
    margin: 0 8px;
}
.bottom_index > span:nth-of-type(2) {
    font-size: 10px;
    line-height: 12px;
    color: #dee3ec;
    margin-right: 277px;
}
.bottom_index a {
    margin-right: 50px;
    color: #f9f9f9;
    line-height: 20px;
    font-size: 14px;
}
.router-link-active {
    border: none !important;
}
.bottom_box {
    height: 350px;
    background-color: #2a2c37;
}
.bottom_box > div {
    width: 1200px;
    margin: 0 auto;
}
.bottom_box > div > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 60px;
    font-size: 14px;
}
.bottom_box > div > div > div > p {
    margin-bottom: 13px;
}
.bottom_box > div > div > ul {
    display: flex;
}
.bottom_box > div > div > ul > li {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
}
.bottom_box > div > div > ul img {
    width: 88px;
    height: 88px;
    border-radius: 8px;
}
.bottom_box > div > div > ul span {
    margin-top: 10px;
    line-height: 17px;
    font-size: 12px;
    text-align: center;
}
.bottom_box > div > ul > li {
    text-align: center;
    margin: 0 25px 14px 25px;
}
.bottom_other {
    height: 112px;
    width: 1200px;
    margin: 0 auto;
}
.bottom_other p {
    padding: 20px 0;
    text-align: center;
}
.bottom_other > div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.bottom_other > div > img {
    width: auto;
    height: 36px;
    margin-right: 20px;
}
</style>