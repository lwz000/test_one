<template>
    <ul>
        <li v-for="i in msg" :key="i">
            <div>
                <img :src="i.userPic" alt="" />
                <span>{{ i.userName }}</span>
                <span>{{ i.vip }}</span>
            </div>
            <div>
                <p>{{ i.text }}</p>
                <div>
                    <span>{{ i.time.slice(0, -2) }}</span>
                    <span>{{ i.product }}</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            msg: [],
            id: this.$route.query.id,
        };
    },
    created() {
        fetch(`/detail?goodId=${this.$route.query.id}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg = JSON.parse(res[0].comment);
            });
    },
    beforeRouteUpdate(to, from) {
        fetch(`/detail?goodId=${to.query.id}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg = JSON.parse(res[0].comment);
            });
    },
};
</script>

<style scoped>
ul {
    padding: 40px 0 0 40px;
}
ul > li {
    display: flex;
    margin-top: 20px;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    font-size: 12px;
}
ul > li > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
ul > li img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
}
ul > li > div:nth-of-type(1) > span:nth-of-type(2) {
    background: #f7b1008c;
    color: rgb(121, 121, 121);
    padding: 0 3px;
    margin-top: 5px;
}
ul > li > div:nth-of-type(2) {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
ul > li > div:nth-of-type(2) > p {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 21px;
}
ul > li > div:nth-of-type(2) > div {
    color: #bbb;
    font-size: 12px;
    line-height: 16px;
}
ul > li > div:nth-of-type(2) > div > span {
    margin-right: 24px;
}
</style>