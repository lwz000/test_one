<template>
    <div ref="router_box"><router-link to="/">首页</router-link></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        for (const i of this.$route.path.split("/")) {
            switch (i) {
                case "new_list":
                    this.$refs.router_box.innerHTML += `
                    <span style='padding: 0 7px;'>></span>
                    <a href="#/new_list" style='color: gray;'>每日上新</a>
                    `;
            }
        }
    },
};
</script>

<style scoped>
div {
    width: 1080px;
    margin: 20px auto;
    font-size: 12px;
}
</style>