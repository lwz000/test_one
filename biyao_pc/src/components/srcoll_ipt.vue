<template>
    <transition name="show_ipt">
        <div v-show="flag" class="scroll_ipt">
            <div>
                <div>
                    全部分类
                    <i
                        style="
                            background: url(http://static.biyao.com/pc/common/img/master/categoryDown.png?v=biyao_58c52bc);
                            background-repeat: no-repeat;
                            background-position: center, center;
                            width: 20px;
                            height: 10px;
                            display: inline-block;
                        "
                    ></i>
                    <div
                        style="
                            position: relative;
                            top: 30px;
                            left: -84px;
                            display: none;
                        "
                    >
                        <type_list></type_list>
                    </div>
                </div>
                <input_box></input_box>
            </div>
        </div>
    </transition>
</template>

<script>
import input_box from "./find_ipt.vue";
import type_list from "./type_list.vue";
export default {
    data() {
        return {
            flag: false,
            all_kind: [],
        };
    },
    mounted() {
        window.addEventListener("scroll", () => {
            if (
                this.$route.path == "/main" ||
                this.$route.path == "/main/say"
            ) {
                this.flag = false;
                return;
            }

            if (window.scrollY > 100) {
                this.flag = true;
            } else {
                this.flag = false;
            }
        });
    },
    components: {
        input_box,
        type_list,
    },
};
</script>

<style scoped>
.scroll_ipt {
    z-index: 5;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
    background-color: #fff;
}
.scroll_ipt > div {
    margin: 0 auto;
    width: 1080px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
}
.show_ipt-enter-from {
    transform: translateY(-100px);
}
.show_ipt-enter-active {
    transition: all 0.2s;
}
.scroll_ipt > div > div:nth-of-type(1) {
    height: 100%;
    display: flex;
    align-items: center;
}
.scroll_ipt > div > div:nth-of-type(1):hover {
    color: #000;
}
.scroll_ipt > div > div:nth-of-type(1):hover i {
    background-image: url(http://static1.biyao.com/pc/common/img/master/categoryUp.png?v=biyao_c7a5f14) !important;
}
.scroll_ipt > div > div:nth-of-type(1):hover div {
    display: block !important;
}
</style>