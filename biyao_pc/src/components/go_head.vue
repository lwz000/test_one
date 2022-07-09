<template>
    <i @click="go_top">
        <img
            src="http://static3.biyao.com/pc/common/img/master/rightBar-top.png?v=biyao_43b4dc3"
            alt=""
        />
    </i>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        go_top() {
            let n_height = document.documentElement.scrollTop;
            let v = n_height / 60;
            let zhen = 0;
            let timer = setInterval(() => {
                document.documentElement.scrollTop -= v;
                zhen++;
                if ((zhen) => 60) {
                    clearInterval(timer);
                }
            }, 16.7);
        },
    },
};
</script>

<style scoped>
</style>