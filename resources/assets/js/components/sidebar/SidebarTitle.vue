<template>
    <b-row class="sidebar-control">
        <b-col cols="10">
            <h1 class="sidebar-title">{{ title }}</h1>
        </b-col>

        <b-col cols="2">
            <b-button variant="link" @click="closeComponent" class="close-icon">
                <icon name="times" scale="2"></icon>
            </b-button>
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

    .close-icon {
        color: gray;
        margin: 10px 0 0 0;
    }
</style>