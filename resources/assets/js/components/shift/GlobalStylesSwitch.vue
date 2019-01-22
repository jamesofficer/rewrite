<template>
    <div class="sidebar-control">
        <top-bar-control
            icon="sitemap"
            tooltip="Enable Global Styles"
            :variant="getGlobalStylesStatus ? 'success' : 'danger'"
            @click.native="setGlobalComponentStyles(! getGlobalStylesStatus)"
        ></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from '../topbar/TopBarControl';

export default {
    name: "GlobalStylesSwitch",

    components: { TopBarControl },

    computed: {
        getGlobalStylesStatus() {
            return this.$store.getters.globalComponentStyles;
        },
    },

    methods: {
        setGlobalComponentStyles(toggle) {
            this.$store.commit('enableGlobalComponentStyles', toggle);
        }
    },
}
</script>
