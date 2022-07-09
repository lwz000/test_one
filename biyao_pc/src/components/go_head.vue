<template>
    <transition name="show">
        <i @click="go_top" v-show="flag"></i>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
        };
    },
    methods: {
        go_top() {
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
        },
    },
    mounted() {
        let that = this;
        window.onscroll = function () {
            if (this.scrollY > 100) {
                that.flag = true;
            } else {
                that.flag = false;
            }
        };
    },
};
</script>

<style scoped>
i {
    width: 48px;
    height: 48px;
    position: fixed;
    right: 30px;
    bottom: 100px;
    display: inline-block;
    background-image: url("http://static3.biyao.com/pc/common/img/master/rightBar-top.png?v=biyao_43b4dc3");
}
i:hover {
    background-image: url("http://static4.biyao.com/pc/common/img/master/rightBar-topActive.png?v=biyao_9ed53de");
}
.show-enter-from {
    opacity: 0;
}
.show-leave-to {
    opacity: 0;
}
.show-enter-active,
.show-leave-active {
    transition: all 0.5s;
}
</style>