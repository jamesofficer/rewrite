<template>
    <el-row class="sidebar-control">
        <el-col :span="18">
            <h1 class="sidebar-title">{{ title }}</h1>
        </el-col>

        <el-col :span="6">
            <el-button icon="el-icon-close" size="mini" circle class="sidebar-close-button" @click="closeComponent"></el-button>
        </el-col>
    </el-row>
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
            console.log('closing...');
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

