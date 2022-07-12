<template>
    <div>
        <inline v-if="online" @change="change()"></inline>
        <register v-if="!online" @change="change()"></register>
    </div>
</template>

<script>
import inline from "../components/inline.vue";
import register from "../components/register.vue";
export default {
    data() {
        return {
            online: "",
        };
    },
    methods: {
        change() {
            this.online = !this.online;
        },
    },
    created() {
        this.online = localStorage.getItem("username");
    },
    components: {
        register,
        inline,
    },
};
</script>

<style>
</style>