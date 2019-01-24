<template>
    <div class="sidebar-control">
        <sidebar-control
            tooltip="Enable Global Styles"
            :icon="getGlobalStyleStatus ? 'toggle-off' : 'toggle-on'"
            :variant="getGlobalStylesStatus ? 'success' : 'danger'"
            @click.native="setGlobalComponentStyles(! getGlobalStylesStatus)"
        ></sidebar-control>
    </div>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl';

export default {
    name: "GlobalStylesSwitch",

    components: { SidebarControl },

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
