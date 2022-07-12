<template>
    <div class="body">
        <div>
            <ul>
                <li>
                    <span @click="$emit('change')">注册</span>
                    <span class="show_ipt">登录</span>
                </li>
                <li>账号：<input type="text" v-model="id" /></li>
                <li>密码：<input type="password" v-model="password" /></li>
                <li @click="set()">确认登录</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["change"],
    data() {
        return {
            id: "",
            password: "",
        };
    },
    methods: {
        set() {
            if (this.id == "") {
                alert("账号不能为空");
            } else if (this.password == "") {
                alert("密码不能为空");
            } else {
                fetch(`/login?userName=${this.id}&password=${this.password}`)
                    .then((r) => r.json())
                    .then((res) => {
                        if (res.code == 1) {
                            alert("登录成功");
                            this.$store.commit("change_id", this.id);
                            localStorage.setItem("token", res.token);
                            localStorage.setItem("username", this.id);
                            this.$router.back();
                        } else {
                            alert("请重新输入账号或密码");
                        }
                    });
            }
        },
    },
    created() {
        this.id = document.cookie.split("=")[1];
    },
};
</script>

<style scoped>
.body {
    background-image: url("https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF");
    margin: 0;
    width: 100%;
}
div > div {
    width: 1080px;
    margin: 200px auto;
    display: flex;
}
ul {
    border: 1px solid rgba(0, 0, 0, 0.432);
    background-color: #fff;
    padding: 40px 20px;
    border-radius: 20px;
    opacity: 0.7;
    width: 281px;
}
ul:hover {
    opacity: 1;
    transition: all 0.5s;
}
ul > li:nth-of-type(1) {
    font-size: 24px;
    margin: 0 0 10px;
    justify-content: flex-start;
}
ul > li:nth-of-type(1) > span {
    margin-right: 20px;
}
.show_ipt {
    border-bottom: 2px solid rgb(99, 15, 255);
    font-weight: 600;
    color: #000;
}
ul > li {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    align-items: center;
    color: rgb(95, 95, 95);
}
ul > li input {
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 8px 15px;
    box-sizing: border-box;
    border-radius: 10px;
}
ul > li:last-of-type {
    background-color: rgb(99, 15, 255);
    color: #fff;
    justify-content: center;
    width: 100px;
    margin: 40px auto 0;
    padding: 10px 20px;
    border-radius: 10px;
}
</style>