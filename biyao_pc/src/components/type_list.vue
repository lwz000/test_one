<template>
    <ul>
        <li v-for="i in arr" :key="i">
            <span v-for="(item, index) in i" :key="item">
                <router-link :to="'/category?type=' + item">{{
                    item
                }}</router-link>
                <i>{{ index == i.length - 1 ? "" : "/" }}</i>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            arr: [[]],
        };
    },
    created() {
        let that = this;
        fetch("/getTypeOne")
            .then((r) => r.json())
            .then(function (res) {
                let num = 0;
                for (const [index, i] of res.entries()) {
                    if ((index + 1) % 3 == 0) {
                        that.arr.push([]);
                        that.arr[num].push(i);
                        num++;
                    } else {
                        that.arr[num].push(i);
                    }
                }
            });
    },
};
</script>

<style scoped>
ul {
    font-size: 14px;
    position: absolute;
    box-sizing: border-box;
    width: 250px;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-image: url("http://static2.biyao.com/pc/common/img/master/category-back.png?v=biyao_c27c88e");
}
li {
    display: flex;
    color: #fff;
    height: 40px;
    padding: 0 0 0 30px;
    line-height: 40px;
}
i {
    margin: 0 10px;
    cursor: default;
}
li a {
    cursor: pointer;
    color: #fff;
    white-space: nowrap;
    margin: 0;
}
li:hover {
    background: rgba(255, 255, 255, 0.2);
}
a:hover {
    color: #f7b200;
}
</style>