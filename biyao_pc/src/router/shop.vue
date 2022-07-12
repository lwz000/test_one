<template>
    <div class="body">
        <ul>
            <li v-for="i in msg" :key="i">
                <span>{{ i.title }}</span>
                <span>{{ i.text }}</span>
            </li>
        </ul>
        <ul>
            <li v-for="i in imgs" :key="i">
                <img :src="i" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: [],
            imgs: [],
            id: this.$route.query.id,
        };
    },
    created() {
        fetch(`/detail?goodId=${this.$route.query.id}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg = JSON.parse(res[0].description);
                this.imgs = JSON.parse(res[0].descriptionImage);
            });
    },
    beforeRouteUpdate(to, from) {
        fetch(`/detail?goodId=${to.query.id}`)
            .then((r) => r.json())
            .then((res) => {
                this.msg = JSON.parse(res[0].description);
                this.imgs = JSON.parse(res[0].descriptionImage);
            });
    },
};
</script>

<style scoped>
.body {
    padding: 40px;
    box-sizing: border-box;
    box-shadow: none;
}
.body img {
    width: 100%;
}
.body > ul:nth-of-type(1) > li {
    display: flex;
    line-height: 32px;
    border-bottom: 2px dotted #cecece;
    font-size: 16px;
    color: #333;
}
.body > ul:nth-of-type(1) > li :nth-of-type(1) {
    min-width: 160px;
    font-size: 16px;
    color: #666;
}
.body > ul:nth-of-type(1) {
    margin-bottom: 20px;
}
</style>