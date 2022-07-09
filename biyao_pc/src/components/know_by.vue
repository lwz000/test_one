<template>
    <div>
        <img
            src="	http://static4.biyao.com/pc/www/img/footer/public_code.png?v=biyao_4651e82"
            alt=""
        />
        <span
            >关注必要微信公众号<br />了解你想了解的一切<br />小必姐在此发福利哦</span
        >
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
    display: none;
    background-color: #fff;
    position: absolute;
    top: 41px;
    left: 118px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    padding: 30px;
    flex-direction: column;
    z-index: 10;
}
span {
    color: #666;
    margin-top: 20px;
}
div::after {
    content: "";
    position: absolute;
    left: 94px;
    top: -20px;
    border: 10px solid rgba(0, 0, 0, 0);
    border-bottom-color: rgb(255, 255, 255);
    filter: drop-shadow(0px -2px 1px rgba(0, 0, 0, 0.1));
}
</style>