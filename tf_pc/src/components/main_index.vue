<template>
    <div class="car_index">
        <div>
            <ul>
                <li
                    :class="index == 0 ? 'index_in' : ''"
                    @click="e('change_index', 0)"
                >
                    基本信息
                </li>
                <li
                    :class="index == 1 ? 'index_in' : ''"
                    @click="e('change_index', 1)"
                >
                    检测报告
                </li>
                <li
                    :class="index == 2 ? 'index_in' : ''"
                    @click="e('change_index', 2)"
                >
                    车辆图片
                </li>
                <li
                    :class="index == 3 ? 'index_in' : ''"
                    @click="e('change_index', 3)"
                >
                    同类推荐
                </li>
            </ul>
            <div>
                <button>在线资讯</button>
                <button>联系电话400 0606 777</button>
            </div>
        </div>
    </div>
</template>

<script setup>
let msg = defineProps(["index"]);
let e = defineEmits(["change_index"]);
</script>

<style scoped>
.car_index {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 70px;
    z-index: 1;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
}
.car_index > div {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
}
.car_index > div > ul {
    display: flex;
    margin-top: 20px;
}
.car_index li {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    padding-bottom: 9px;
    margin-right: 60px;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    cursor: pointer;
}
.car_index > div > div {
    margin-top: 11px;
}
.car_index button {
    font-size: 18px;
    font-weight: 600;
    padding: 7px 30px;
    color: #ffffff;
    border-radius: 4px;
    background: #2567ff;
    box-shadow: 0px 4px 16px 0px rgb(88 136 255 / 40%);
    border: none;
    cursor: pointer;
}
.car_index button:nth-of-type(1) {
    background: #2b7df2;
    box-shadow: 0px 2px 16px 0px rgb(43 125 242 / 40%);
    margin-right: 10px;
}
.index_in {
    color: #5685fe;
    border-color: #5685fe !important;
}
</style>