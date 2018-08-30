<template>
    <portal to="sidebar">
        <b-container>
            <b-row class="sidebar-control">
                <b-col cols="10">
                    <h1 class="sidebar-title"><strong>{{ title }}</strong></h1>
                </b-col>

                <b-col cols="2">
                    <b-button variant="link" @click="closeSidebar" class="close-icon">
                        <icon name="times" scale="2"></icon>
                    </b-button>
                </b-col>
            </b-row>

            <slot></slot>
        </b-container>
    </portal>
</template>

<script>
export default {
    name: "Sidebar",

    props: {
        title: {
            type: String,
            required: false,
        }
    },

    methods: {
        closeSidebar() {
            this.$store.commit('closeSidebar');
        }
    }
}
</script>

<style scoped>
.sidebar-title {
    margin-top: 10px;
    line-height: 2em;
    font-size: 2em;
}

.close-icon {
    color: gray;
    margin: 20px 0 0 0;
}
</style>