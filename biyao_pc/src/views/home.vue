<template>
    <div class="body">
        <type_list></type_list>
        <img
            src="http://static1.biyao.com/pc/www/img/new_master/banner2.png?v=biyao_ded5987"
            alt=""
        />
        <ul>
            <li>
                <img
                    src="http://static4.biyao.com/pc/www/img/new_master/ptzc_character.png?v=biyao_e95bcd0"
                    alt=""
                />
                大牌品质
            </li>
            <li>
                <img
                    src="http://static.biyao.com/pc/www/img/new_master/ptzc_price.png?v=biyao_6786c61"
                    alt=""
                />
                工厂价格
            </li>
            <li>
                <img
                    src="	http://static1.biyao.com/pc/www/img/new_master/ptzc_payment.png?v=biyao_75208ed"
                    alt=""
                />
                分期支付
            </li>
            <li>
                <img
                    src="	http://static2.biyao.com/pc/www/img/new_master/ptzc_sf.png?v=biyao_4abee91"
                    alt=""
                />
                顺丰包邮
            </li>
            <li>
                <img
                    src="	http://static3.biyao.com/pc/www/img/new_master/ptzc_refund.png?v=biyao_54de047"
                    alt=""
                />
                无忧退款
            </li>
        </ul>
    </div>
    <all_the_goods></all_the_goods>
</template>

<script>
import type_list from "../components/type_list.vue";
import all_the_goods from "../components/all_the_goods.vue";
export default {
    data() {
        return {
            arr: [],
        };
    },
    components: {
        type_list,
        all_the_goods,
    },
};
</script>

<style scoped>
.body {
    position: relative;
    width: 1080px;
    margin: 0 auto;
    background-color: #fff;
}
.body > img {
    width: 1080px;
}
ul {
    display: flex;
    justify-content: space-between;
    color: #9687a4;
}
ul li {
    display: flex;
    align-items: center;
    padding: 5px 35px 7px;
    font-size: 14px;
}
ul li img {
    width: 32px;
    margin-right: 10px;
}
</style>