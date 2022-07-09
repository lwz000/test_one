<template>
    <div class="title">
        <p>热销排行</p>
    </div>
    <ul class="all" ref="all_list">
        <li
            v-for="i in arr"
            :key="i"
            @click="this.$router.push(`/main?id=${i.Id}`)"
        >
            <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F03%2F20210803221325_100a1.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659930434&t=d3a13aa969d6e1090254fab7bb0ebf86"
                :data-src="i.imageUrl"
                alt=""
                ref="img_load"
                style="width: 530px; height: 272px"
            />
            <ul>
                <li ref="tap" :data-tap="i.labels">
                    <span>￥{{ i.priceStr }}</span>
                </li>
                <li>{{ i.salePoint }}</li>
                <li>
                    <span>{{ i.title }}</span>
                    <span
                        >{{
                            i.evaluate > 10000
                                ? i.evaluate / 10000 + "w"
                                : i.evaluate
                        }}+条好评</span
                    >
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            arr: [],
            page: 1,
            can_get: true,
        };
    },
    methods: {
        get_list() {
            let that = this;
            fetch(`/hotlist?page=${that.page}`)
                .then((r) => r.json())
                .then((res) => {
                    for (const i of res) {
                        that.arr.push(i);
                    }
                });
            this.page++;
        },
    },
    created() {
        this.get_list();
        let that = this;
        window.onscroll = function () {
            if (that.$refs.all_list == null) {
                return;
            }
            if (
                this.scrollY >
                    that.$refs.all_list.offsetTop +
                        that.$refs.all_list.offsetHeight * 0.8 &&
                that.can_get
            ) {
                that.get_list();
                that.can_get = false;
                setTimeout(() => {
                    that.can_get = true;
                }, 1000);
            }
            for (const i of that.$refs.img_load) {
                if (
                    i.offsetTop <
                    document.documentElement.scrollTop +
                        window.innerHeight * 0.8
                ) {
                    i.src = i.dataset.src;
                }
            }
        };
    },
    updated() {
        for (const i of this.$refs.tap) {
            if (i.children.length != 1) {
                continue;
            }
            for (const item of JSON.parse(i.dataset.tap)) {
                i.innerHTML += `
                <span style='background:${item.color};border:1px solid ${item.roundColor};color:${item.textColor};font-size:10px;border-radius: 2px;height: 16px;display: inline-block;box-sizing: border-box;padding: 0 2px;line-height: 13px;margin-left: 5px;'>${item.content}</span>
                `;
            }
        }
    },
};
</script>

<style scoped>
.title {
    width: 1080px;
    margin: 30px auto;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
}
.title > p {
    font-weight: 550;
    font-size: 18px;
    line-height: 25px;
    padding-bottom: 4px;
    border-bottom: 1px solid #bbb;
}
.all {
    display: flex;
    flex-wrap: wrap;
    width: 1080px;
    margin: 0 auto;
    justify-content: space-between;
}
.all > li {
    width: 530px;
    background-color: #fff;
    margin-bottom: 20px;
    cursor: pointer;
}
.all img {
    width: 100%;
}
.all ul {
    padding: 0 0 20px 20px;
    overflow: hidden;
}
.all ul > li:nth-of-type(1) {
    display: flex;
    align-items: center;
    color: #f7a701;
    margin-top: 10px;
    line-height: 22px;
}
.all ul > li:nth-of-type(2) {
    font-size: 12px;
    line-height: 18px;
    color: #bf9e6b;
    margin-top: 6px;
}
.all ul > li:nth-of-type(3) {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 20px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
}
.all ul > li:nth-of-type(3) > span:nth-of-type(2) {
    font-size: 12px;
    color: #bbb;
    float: right;
    margin-right: 20px;
}
</style>