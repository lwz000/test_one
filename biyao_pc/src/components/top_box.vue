<template>
    <div class="body">
        <div>
            <img
                src="http://static2.biyao.com/pc/common/img/master/logo.png"
                alt=""
            />
            <div class="find_box">
                <find_ipt></find_ipt>
                <ul>
                    <li v-for="i in hot_find" :key="i">{{ i }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import find_ipt from "./find_ipt.vue";
export default {
    data() {
        return {
            hot_find: [
                "眼霜",
                "伞",
                "面膜",
                "男士内裤",
                "防晒霜",
                "乳液",
                "袜子男夏季",
                "电动牙刷",
                "短裤男",
                "洗面奶",
            ],
        };
    },
    methods: {},
    created() {
        //     fetch(
        //         "http://www.biyao.com/classify/hotWord?callback=jQuery18309375303940717574_1657284969608&_=1657284969733"
        //     )
        //         .then((r) => r.json())
        //         .then((res) => {
        //             this.hot_find = res
        //         });
    },
    components: {
        find_ipt,
    },
};
</script>

<style scoped>
.body {
    width: 100%;
}
.body > div {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 1080px;
    margin: 30px auto 20px;
}
.body > div > img {
    height: 51px;
}
ul {
    display: flex;
}
ul > li {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    margin-right: 7px;
}
</style>