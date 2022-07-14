<template>
    <div
        style="background: url('https://www.tf2sc.cn/static/img/top.png')"
        class="pg_box"
    >
        <ul>
            <li>
                <span>HI，在线评估</span>
                <span>提交信息，快速获取股价~</span>
            </li>
            <li>
                <input type="text" placeholder="姓名" v-model="name" />
                <input type="number" placeholder="手机号码" v-model="number" />
            </li>
            <li>
                <input type="text" placeholder="评估车型" v-model="car" />
                <input type="number" placeholder="公里数" v-model="car_num" />
            </li>
            <li>
                <input
                    type="text"
                    placeholder="上牌时间 格式:2000-01"
                    v-model="time"
                />
            </li>
            <li>
                <button @click="go_up()">提交信息</button>
            </li>
        </ul>
        <ul>
            <li>选择腾发的好处</li>
            <li>
                <div>
                    <img
                        src="https://www.tf2sc.cn/static/img/sellCar_duigou.png"
                        alt=""
                    />
                    <div>
                        <span>卖价高，最快可当天拿钱</span>
                        <span>卖价高，最快可当天完成过户，当天拿钱</span>
                    </div>
                </div>
                <div>
                    <img
                        src="https://www.tf2sc.cn/static/img/sellCar_duigou.png"
                        alt=""
                    />
                    <div>
                        <span>卖车过程透明，省时省心</span>
                        <span>卖车过程透明看得到，专人办理卖车服务</span>
                    </div>
                </div>
                <div>
                    <img
                        src="https://www.tf2sc.cn/static/img/sellCar_duigou.png"
                        alt=""
                    />
                    <div>
                        <span>实体展厅卖车信得过</span>
                        <span>20年实体经营，交易有保障</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="problem_box">
        <p>常见问题</p>
        <ul>
            <li
                style="
                    background-image: url('https://www.tf2sc.cn/static/img/sellCar_first.jpg');
                "
            >
                <p>卖车需要准备哪些资料？</p>
                <div>
                    需要先在网站提供您的联系电话，车辆品牌、型号等基本信息。待服务人员联系您后，在约定时间内准备好
                    <br />
                    1、身份证；&nbsp;6、车示标（环保标、检字标、交强险标）；
                    <br />
                    2、行驶证；&nbsp;7、交强险单；
                    <br />
                    3、车辆登记证；&nbsp;8、购置税本及购置税发票；
                    <br />
                    4、车辆钥匙；&nbsp;9、购车发票/最近一次过户发票；
                    <br />
                    5、说明书保养手册
                </div>
            </li>
            <li
                style="
                    background-image: url('https://www.tf2sc.cn/static/img/sellCar_second.jpg');
                "
            >
                <p>通过腾发出售车辆需要什么费用？</p>
                <div>
                    在腾发寄售车辆，卖车快，卖价高。整个服务过程透明。评估师给参考售价，明确收费内容，同意后签订寄售协议。卖出的车辆同样也享受腾发的质保服务。
                </div>
            </li>
            <li
                style="
                    background-image: url('https://www.tf2sc.cn/static/img/sellCar_third.jpg');
                "
            >
                <p>卖车具体的流程是怎么样的呢？</p>
                <div>
                    1、提交资料及联系方式。
                    <br />
                    2、预约开车到店检测车辆或直接来店检测车辆。
                    <br />
                    3、现金交易结款。
                    <br />
                    4、办理过户手续。
                </div>
            </li>
            <li
                style="
                    background-image: url('https://www.tf2sc.cn/static/img/sellCar_forth.jpg');
                "
            >
                <p>通过腾发卖车的好处？</p>
                <div>
                    卖价高：3万余平的实体展厅，近5000平独立的售后服务中心。
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { get } from "lodash";
import { ref } from "vue";
let name = ref();
let number = ref();
let car = ref();
let car_num = ref();
let time = ref();

let go_up = () => {
    if (
        name.value &&
        number.value &&
        car.value &&
        car_num.value &&
        time.value
    ) {
        console.log("qop");
    } else {
        alert("请输入内容");
        return;
    }

    fetch(
        "https://api.tf2sc.cn/api/tfcar/car/estimate?name=" +
            name.value +
            "&phone=" +
            number.value +
            "&model=" +
            car.value +
            "&mileage=" +
            car_num.value +
            "&dateOfRegistration=" +
            time.value +
            "&type=0",
        {
            method: "post",
            headers: { PlatformType: "h5" },
        }
    )
        .then((r) => r.json())
        .then((res) => {
            alert(`${res.msg}`);
        });
};
</script>

<style scoped>
.pg_box {
    width: 1200px;
    margin: 20px auto;
    display: flex;
}
.pg_box > ul:nth-of-type(1) {
    width: 540px;
    height: 484px;
    margin-right: 35px;
}
.pg_box > ul:nth-of-type(1) > li:nth-of-type(1) {
    display: flex;

    padding-top: 50px;
    padding-left: 30px;
}
.pg_box > ul:nth-of-type(1) > li:nth-of-type(1) > span:nth-of-type(1) {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    line-height: 32px;
}
.pg_box > ul:nth-of-type(1) > li:nth-of-type(1) > span:nth-of-type(2) {
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    opacity: 0.8;
    padding-left: 20px;
    padding-top: 10px;
}
.pg_box > ul:nth-of-type(1) input {
    padding-left: 14px;
    width: 198px;
    height: 46px;
    background: #ffffff;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    margin-left: 40px;
    margin-top: 30px;
}
.pg_box > ul:nth-of-type(1) > li:nth-of-type(4) input {
    width: 454px;
}
.pg_box > ul:nth-of-type(1) button {
    margin-left: 40px;
    margin-top: 50px;
    width: 462px;
    height: 50px;
    background: #5685fe;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
    opacity: 0.9;
}
.pg_box > ul:nth-of-type(2) {
    padding-left: 42px;
}
.pg_box > ul:nth-of-type(2) > li:nth-of-type(1) {
    padding-top: 53px;
    padding-bottom: 52px;
    width: 216px;
    height: 29px;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    line-height: 29px;
}
.pg_box > ul:nth-of-type(2) > li:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
}
.pg_box > ul:nth-of-type(2) > li:nth-of-type(2) > div {
    display: flex;
    height: 80px;
    width: 280px;
    margin-right: 20px;
}
.pg_box > ul:nth-of-type(2) > li:nth-of-type(2) > div img {
    width: 24px;
    height: 24px;
}
.pg_box > ul:nth-of-type(2) > li:nth-of-type(2) > div > div {
    display: flex;
    flex-direction: column;
}
.pg_box
    > ul:nth-of-type(2)
    > li:nth-of-type(2)
    > div
    > div
    > span:nth-of-type(1) {
    padding-left: 13px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    vertical-align: super;
    line-height: 24px;
}
.pg_box
    > ul:nth-of-type(2)
    > li:nth-of-type(2)
    > div
    > div
    > span:nth-of-type(2) {
    display: inline-block;
    padding-left: 13px;
    padding-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    opacity: 0.6;
    width: 200px;
}
.problem_box {
    height: 814px;
    background-color: #f2f4fb;
}
.problem_box > p {
    width: 1200px;
    margin: 0 auto 20px;
    font-size: 18px;
    font-weight: 600;
    color: #5685fe;
    text-align: center;
    padding-top: 50px;
    position: relative;
}
.problem_box > p::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -40px;
    width: 36px;
    height: 4px;
    background: #5685fe;
    border-radius: 2px;
    margin-left: 582px;
    margin-top: 6px;
    margin-bottom: 30px;
}
.problem_box > ul {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.problem_box > ul > li {
    background-repeat: no-repeat;
    width: 590px;
    height: 295px;
    box-shadow: 0px 0px 10px 0px rgb(74 101 172 / 5%);
    border-radius: 8px;
    background-size: 590px 295px;
    margin-bottom: 20px;
    cursor: pointer;
}
.problem_box > ul > li > p {
    font-size: 24px;
    font-weight: 700;
    color: #333333;
    margin-top: 30px;
    margin-left: 50px;
}
.problem_box > ul > li > div {
    margin-top: 20px;
    margin-left: 50px;
    width: 480px;
    height: 182px;
    font-size: 14px;
    font-weight: 400;
    color: #525b78;
    line-height: 26px;
}
</style>