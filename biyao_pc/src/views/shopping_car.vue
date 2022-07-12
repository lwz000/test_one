<template>
    <ul>
        <li>
            <input
                type="checkbox"
                :checked="buy_num == list.length"
                @click="change_all($event)"
            />
            <span>商品信息</span>
            <span>价格</span>
            <span>数量</span>
            <span>操作</span>
        </li>
        <li v-for="i in list" :key="i">
            <input type="checkbox" :checked="i.buy" @click="change(i.Id)" />
            <span> <img :src="i.imageUrl" alt="" />{{ i.title }}</span>
            <span>{{ i.priceStr }}</span>
            <span>
                <button @click="remove(i.Id, $event)">-</button>
                <span>{{ i.count }}</span>
                <button @click="add(i.Id)">+</button>
            </span>
            <span @click="del(i.Id)">删除商品</span>
        </li>
    </ul>
    <div>
        <p>总件数<span ref="all_num">0元</span></p>
        <p>总价<span ref="all_pic">0件</span></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            buy_num: 0,
        };
    },
    methods: {
        getlist() {
            fetch(
                `/shopList?token=${localStorage.getItem(
                    "token"
                )}&userId=${localStorage.getItem("username")}`
            )
                .then((r) => r.json())
                .then((res) => {
                    this.list.length = 0;
                    for (const i of res) {
                        console.log(i);
                        i.buy = true;
                        this.list.push(i);
                    }
                });
        },
        remove(x, e) {
            fetch(
                `/remove?token=${localStorage.getItem(
                    "token"
                )}&userId=${localStorage.getItem("username")}&goodId=${x}`
            )
                .then((r) => r.json())
                .then((res) => {
                    if (e.target.parentNode.children[1].innerText < 2) {
                        this.del(x);
                        return;
                    }
                    this.getlist();
                });
        },
        del(x) {
            fetch(
                `/del?token=${localStorage.getItem(
                    "token"
                )}&userId=${localStorage.getItem("username")}&goodId=${x}`
            )
                .then((r) => r.json())
                .then((res) => {
                    this.getlist();
                });
        },
        add(x) {
            fetch(
                `/add?token=${localStorage.getItem(
                    "token"
                )}&userId=${localStorage.getItem("username")}&goodId=${x}`
            )
                .then((r) => r.json())
                .then((res) => {
                    this.getlist();
                });
        },
        change(x) {
            for (const i of this.list) {
                if (i.Id == x) {
                    i.buy = !i.buy;
                }
            }
        },
        change_all(e) {
            fetch(
                `/shopList?token=${localStorage.getItem(
                    "token"
                )}&userId=${localStorage.getItem("username")}`
            )
                .then((r) => r.json())
                .then((res) => {
                    this.list.length = 0;
                    for (const i of res) {
                        i.buy = e.target.checked;
                        this.list.push(i);
                        this.buy_num = -1;
                    }
                });
        },
    },
    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem("token")) {
            next();
        }
    },
    created() {
        this.getlist();

        for (const i of this.list) {
            if (i.buy) {
                this.buy_num++;
                num += i.count;
                pic += i.count * i.priceStr;
            }
        }

        if (this.buy_num == 0) {
            this.buy_num = -1;
        }
    },
    updated() {
        let num = 0;
        let pic = 0;
        this.buy_num = 0;
        for (const i of this.list) {
            if (i.buy) {
                this.buy_num++;
                num += i.count;
                pic += i.count * i.priceStr;
            }
        }
        if (this.buy_num == 0) {
            this.buy_num = -1;
        }
        this.$refs.all_num.innerText = num + "件";
        this.$refs.all_pic.innerText = pic + "元";
    },
};
</script>

<style scoped>
ul {
    width: 1080px;
    margin: 30px auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px 40px;
    box-sizing: border-box;
}
ul img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}
ul > li {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}
ul > li:nth-of-type(1) {
    padding: 10px 0 20px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
}
ul > li:nth-of-type(1) > span:nth-of-type(1) {
    justify-content: center;
}
ul > li > span:nth-of-type(1) {
    width: 350px;
    text-align: center;
    display: flex;
    align-items: center;
}
ul > li > span:nth-of-type(1) {
    font-size: 14px;
}
ul > li > span:nth-of-type(2) {
    width: 70px;
}
ul > li > span:nth-of-type(3) {
    width: 100px;
}
ul > li > span:nth-of-type(4) {
    width: 100px;
    background-color: red;
    color: #fff;
    border-radius: 5px;
    padding: 5px 0;
}
ul > li:nth-of-type(1) > span:nth-of-type(4) {
    background-color: #fff;
    color: #000;
}
ul > li button {
    width: 20px;
    height: 20px;
    border: none;
    margin: 5px;
    cursor: pointer;
}
div {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    background-color: #fff;
    justify-content: flex-end;
    border-radius: 5px;
    padding: 20px 40px 20px 10px;
    box-sizing: border-box;
}
div > p {
    margin-left: 20px;
    font-weight: 300;
    font-size: 16px;
}
div > p > span {
    font-weight: normal;
    font-size: 20px;
    margin-left: 5px;
}
</style>