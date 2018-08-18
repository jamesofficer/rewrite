<template>
    <b-row class="sidebar-control">
        <b-col cols="10">
            <h1 class="sidebar-title">{{ title }}</h1>
        </b-col>

        <b-col cols="2">
            <b-button size="sm" @click="closeComponent">x</b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "SidebarTitle",

    props: {
        title: {
            type: String,
            required: false,
        }
    },

    methods: {
        closeComponent() {
            this.$store.commit('closeComponent');
        }
    }
}
</script>

<style scoped>
    .sidebar-title {
        margin: 0;
        padding: 0;
        line-height: 2em;
        font-size: 2em;
    }

    .sidebar-close-button {
        float: right;
        margin: 5px 5px 0 0;
    }
</style>