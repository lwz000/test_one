<template>
    <div
        style="
            background-image: url('https://www.tf2sc.cn/static/img/banner.jpg');
        "
        class="top_box"
    >
        <div>
            <p>中原二手车服务领跑者</p>
            <div>
                <img src="https://www.tf2sc.cn/static/img/left.png" alt="" />
                <span>买亏可退、7天无理由退车、15天可换、终身质保</span>
                <img src="https://www.tf2sc.cn/static/img/right.png" alt="" />
            </div>
            <ul>
                <li>
                    <img
                        src="https://www.tf2sc.cn/static/img/duigou.png"
                        alt=""
                    />
                    <div>
                        <p>选择多</p>
                        <span>多款精选 金融方案</span>
                    </div>
                </li>
                <li>
                    <img
                        src="https://www.tf2sc.cn/static/img/shandian.png"
                        alt=""
                    />
                    <div>
                        <p>审核快</p>
                        <span>最快30分钟 完成审核</span>
                    </div>
                </li>
                <li>
                    <img
                        src="https://www.tf2sc.cn/static/img/jinpai.png"
                        alt=""
                    />
                    <div>
                        <p>通过率高</p>
                        <span>定制方案 更高审批通过率</span>
                    </div>
                </li>
                <li>
                    <img
                        src="https://www.tf2sc.cn/static/img/dunpai.png"
                        alt=""
                    />
                    <div>
                        <p>专属服务</p>
                        <span>金融专员全程服务</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div
        style="
            background-image: url('https://www.tf2sc.cn/static/img/footer_bg.png');
        "
        class="bottom_box"
    >
        <div>
            <p>在腾发二手车任意客户经理即可快捷办理汽车贷款按揭</p>
            <p>服务热线：400-0606-777</p>
        </div>
        <div>
            <img src="https://www.tf2sc.cn/static/img/jianzhu.png" alt="" />
            <ul>
                <li>
                    <img
                        src="https://www.tf2sc.cn/static/img/gsBank.png"
                        alt=""
                    />
                    <div>
                        <p>工商银行贷款条件</p>
                        <div>
                            1.征信良好。
                            <br />
                            2.河南省内房产证明。
                            <br />
                            3.非河南省内房产证明。
                        </div>
                        <p>按揭所需资料</p>
                        <div>
                            1.双方身份证、户口本、结婚证。
                            <br />
                            2.名下房产证或购房合同提供复印件验原件
                            <br />
                            3.申请人夫妻单位收入证明（收原件，收入总和达到每月所有还款金额两倍以上）。
                            <br />
                            4.半年以上银行存折或银行卡个人资金流量表（收原件，流水达到月供金额的两倍）。
                        </div>
                        <p>贷款额度</p>
                        <div>
                            工商银行：贷款金额不超过成交价的70%，最高可贷85万（本息合计）。利率(如遇变动以实时利率为准)：分期性性付息，三年月息低至4.7厘。
                        </div>
                    </div>
                </li>
                <li>
                    <img
                        src="https://www.tf2sc.cn/static/img/paBank.png"
                        alt=""
                    />
                    <div>
                        <p>平安银行快速审批贷款条件</p>
                        <div>
                            1.征信良好并且有一年以上征信记录，满18周岁以上符合银行准入即可申请
                            <br />
                            2.所需资料：身份证、驾驶证、银行卡即可（收照片验原件）。
                        </div>
                        <p>平安银行非快速审批贷款条件</p>
                        <div>
                            1.河南省内房产证明
                            <br />
                            2.非河南省内房产证明
                            <br />
                            3.双方身份证、户口本、结婚证。
                            <br />
                            4.符合准入条件的工作或财力证明，如工资流水或工资单、房产证或房产按揭合同等等。
                        </div>
                        <p>贷款额度</p>
                        <div>
                            平安银行最高可贷人民币150万元。利率(如遇变动以实时利率为准)：分期性付息，三年月息低至5.5厘。
                            <br />
                            另注：按揭贷款金额以银行参考客户实际情况批复为准。
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.top_box {
    background-repeat: no-repeat;
    background-color: #fff;
}
.top_box > div {
    width: 1200px;
    margin: 0 auto;
}
.top_box > div > p {
    padding: 200px 0 30px;
    text-align: center;
    color: #fff;
    font-size: 44px;
}
.top_box > div > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
}
.top_box > div > div:nth-of-type(1) > span {
    color: #fff;
    font-size: 28px;
    margin: 0px 10px;
}
.top_box > div > ul {
    display: flex;
    margin-top: 180px;
    width: 1200px;
    height: 132px;
    box-sizing: border-box;
    background: #5685fe;
    border-radius: 14px;
    justify-content: space-between;
    align-items: center;
}
.top_box > div > ul > li {
    margin: 0 20px;
    display: flex;
}
.top_box > div > ul > li > img {
    padding-right: 10px;
}
.top_box > div > ul > li > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
}
.top_box > div > ul > li > div > p {
    font-size: 18px;
    font-weight: 500;
}
.bottom_box {
    background-repeat: no-repeat;
    background-position: left bottom;
    background-color: #fff;
}
.bottom_box > div {
    width: 1200px;
    padding: 10px 0;
    margin: 0px auto;
}
.bottom_box > div:nth-of-type(1) {
    text-align: center;
    padding-top: 63px;
    color: #4e5775;
    font-size: 16px;
}
.bottom_box > div:nth-of-type(1) > p:nth-of-type(1) {
    margin-bottom: 10px;
}
.bottom_box > div:nth-of-type(1) > p:nth-of-type(2) {
    margin: 0 auto;
    width: 270px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    background: #5685fe;
    box-shadow: 0px 4px 16px 0px rgb(88 136 255 / 40%);
    border-radius: 4px;
}
.bottom_box > div:nth-of-type(2) {
    position: relative;
    padding-bottom: 70px;
}
.bottom_box > div:nth-of-type(2) > img {
    position: absolute;
    bottom: 140px;
}
.bottom_box > div:nth-of-type(2) > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 1200px;
    height: 1046px;
    margin-top: 50px;
    margin-bottom: 70px;
    background: #ffffff;
    box-shadow: 0px 0px 20px 0px rgb(74 101 172 / 18%);
    border-radius: 8px;
}
.bottom_box > div:nth-of-type(2) > ul > li {
    width: 100%;
    display: flex;
}
.bottom_box > div:nth-of-type(2) > ul > li > img {
    width: 275px;
    height: 60px;
    margin-left: 50px;
    margin-top: 20px;
    margin-right: 20px;
}
.bottom_box > div:nth-of-type(2) > ul > li > div > p {
    font-size: 20px;
    margin: 20px 0;
    font-size: 20px;
    font-weight: 600;
    color: #333333;
}
.bottom_box > div:nth-of-type(2) > ul > li > div > div {
    margin-top: 10px;
    color: rgba(82, 91, 120, 1);
    font-size: 14px;
    line-height: 26px;
}
</style>