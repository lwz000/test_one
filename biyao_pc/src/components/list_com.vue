<template>
    <p>{{ !is_n ? type_two : "热门商品" }}</p>
    <ul ref="all_list">
        <li v-for="i in msg" :key="i" @click="$router.push('/main?id=' + i.Id)">
            <img :src="i.imageUrl" alt="" />
            <p>{{ $route.query.supplier }}</p>
            <span>{{ i.title }}</span>
            <div>
                <span>￥{{ i.priceStr }}</span>
                <div ref="tip" :data-tip="i.mack"></div>
            </div>
            <p>
                {{
                    i.evaluate > 10000 ? i.evaluate / 10000 + "w" : i.evaluate
                }}条好评
            </p>
        </li>
    </ul>
</template>

<script>
export default {
    props: ["type_two", "a_msg"],
    data() {
        return {
            msg: [],
            num: 1,
            can_get: true,
            is_n: false,
        };
    },
    methods: {
        getsupplierList() {
            fetch(
                `/supplierList?supplier=${this.$route.query.supplier}&page=${this.num}}`
            )
                .then((r) => r.json())
                .then((res) => {
                    for (const i of res) {
                        this.msg.push(i);
                    }
                });
            this.num++;
        },
        get_list() {
            fetch(`/hotlist?page=${this.num}`)
                .then((r) => r.json())
                .then((res) => {
                    this.is_n = true;
                    for (const i of res) {
                        this.msg.push(i);
                    }
                });
            this.num++;
        },
    },
    created() {
        if (this.$route.path == "/category") {
            fetch(
                `/getTypeTwoList?type_one=${this.$route.query.type}&type_two=${this.type_two}`
            )
                .then((r) => r.json())
                .then((res) => {
                    this.msg = res;
                });
        } else if (this.$route.path == "/supplierList") {
            this.getsupplierList();
            window.addEventListener("scroll", () => {
                if (this.$route.path != "/supplierList") {
                    return;
                }
                if (
                    window.scrollY >
                        this.$refs.all_list.offsetTop +
                            this.$refs.all_list.offsetHeight * 0.8 &&
                    this.can_get
                ) {
                    this.getsupplierList();
                    this.can_get = false;
                    setTimeout(() => {
                        this.can_get = true;
                    }, 1000);
                }
            });
        } else if (this.$route.path == "/search") {
            console.log(this.a_msg);
            this.msg = this.a_msg;
            console.log(this.msg);
        }
    },
};
</script>

<style scoped>
p {
    color: #333;
    font-size: 24px;
    margin-top: 20px;
    text-align: center;
}
ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
ul > li {
    width: 225px;
    background-color: #fff;
    text-align: center;
    padding: 15px;
    margin-bottom: 20px;
    cursor: pointer;
    margin-right: 20px;
}
ul > li:nth-of-type(4n) {
    margin-right: 0;
}
ul img {
    width: 100%;
    height: 225px;
}
ul > li > p:nth-of-type(1) {
    font-size: 12px;
    line-height: 17px;
    color: #bf9e6b;
    margin-top: 10px;
}
ul > li > span {
    font-size: 14px;
    line-height: 19px;
    color: #4a4a4a;
    margin-top: 5px;
}
ul > li > p:nth-of-type(2) {
    font-size: 12px;
    line-height: 17px;
    color: #bbb;
    margin-top: 10px;
}
ul > li:hover {
    box-shadow: 0 1px 10px 4px rgb(0 0 0 / 5%);
    transition: all 0.3s;
}
ul > li:hover img {
    transform: scale(1.05);
    transition: all 1s;
}
</style>