<template>
    <go_page></go_page>
    <div class="body">
        <div>
            <p>每日上新</p>
            <span ref="now_time"></span>
        </div>
        <ul ref="all_list">
            <li
                v-for="i in arr"
                :key="i"
                @click="this.$router.push(`/main?id=${i.Id}`)"
            >
                <div>
                    <div ref="tap" :data-tip="i.labels"></div>
                    <div>
                        <p>{{ i.title }}</p>
                        <p>￥{{ i.priceStr }}</p>
                        <p>
                            {{
                                i.evaluate >= 10000
                                    ? i.evaluate / 10000 + "w"
                                    : i.evaluate
                            }}+好评
                        </p>
                    </div>
                    <span>{{ i.salePoint }}</span>
                </div>
                <img :src="i.imageUrl" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
import go_page from "../components/go_page.vue";
export default {
    data() {
        return {
            arr: [],
            page: 1,
        };
    },
    methods: {
        get_new() {
            fetch(`/newlist?page=${this.page}`)
                .then((r) => r.json())
                .then((res) => {
                    for (const i of res) {
                        this.arr.push(i);
                    }
                });
        },
    },
    components: {
        go_page,
    },
    created() {
        this.get_new();
    },
    mounted() {
        let time = new Date();
        this.$refs.now_time.innerText = `${time.getFullYear()} - ${
            time.getMonth() > 9
                ? time.getMonth() + 1
                : "0" + (time.getMonth() + 1)
        } - ${time.getDay() > 10 ? time.getDay() : "0" + time.getDay()}`;
        let that = this;
    },
    updated() {
        for (const i of this.$refs.tap) {
            if (i.children.length + 1 != 1) {
                continue;
            }
            for (const item of JSON.parse(i.dataset.tip)) {
                i.innerHTML += `
                <span style='background:${item.color};border:1px solid ${item.roundColor};color:${item.textColor};font-size:10px;border-radius: 2px;height: 16px;display: inline-block;box-sizing: border-box;padding: 0 2px;line-height: 13px;margin-left: 5px;'>${item.content}</span>
                `;
            }
        }
    },
};
</script>

<style scoped>
.body {
    width: 1080px;
    margin: 0 auto;
}
.body > div {
    color: #333;
    font-size: 24px;
    text-align: center;
}
.body > div > p {
    margin: 10px 0 20px;
}
.body > div > span {
    padding: 0 20px;
    font-weight: 400;
    font-size: 24px;
    color: gray;
    background: #f9f9f9;
}
.body > ul > li {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    background-color: #fff;
    cursor: pointer;
}
.body > ul > li > div {
    padding: 20px;
}
.body > ul > li > div > div:nth-of-type(2) {
    text-align: center;
}
.body > ul > li > div > div:nth-of-type(2) > p:nth-of-type(1) {
    font-size: 18px;
    color: #4a4a4a;
    margin-top: 42px;
    line-height: 25px;
}
.body > ul > li > div > div:nth-of-type(2) > p:nth-of-type(2) {
    height: 33px;
    line-height: 33px;
    margin-top: 15px;
    font-size: 22px;
    color: #f7a701;
    padding-bottom: 15px;
}
.body > ul > li > div > div:nth-of-type(2) > p:nth-of-type(3) {
    display: inline-block;
    font-size: 14px;
    padding: 0 20px 10px;
    color: #bf9e6b;
    margin: 14px 20px 20px;
    line-height: 20px;
    border-bottom: 2px solid #f2f2f2;
}
.body > ul > li > div > span {
    display: block;
    font-size: 16px;
    color: gray;
    margin-top: 28px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 5px;
}
</style>