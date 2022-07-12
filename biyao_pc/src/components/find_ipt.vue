<template>
    <div>
        <input type="text" placeholder="请输入要搜索的商品" v-model="text" />
        <img
            src="http://static3.biyao.com/pc/common/img/master/search.png?v=biyao_2e92562"
            alt=""
            @click="to_find()"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "",
        };
    },
    methods: {
        to_find() {
            if (this.text == "") {
                alert("请输入搜索内容");
                return;
            }

            this.$router.push({
                path: "/search",
                query: {
                    word: this.text,
                },
            });
        },
    },
};
</script>

<style scoped>
div {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    display: flex;
    text-align: center;
    margin-bottom: 5px;
}
input {
    border: none;
    width: 380px;
    padding: 10px;
    border-radius: 5px 0 0 5px;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
}
img {
    padding: 5px;
    width: 24px;
}
</style>