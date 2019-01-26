<template>
    <div class="sidebar-control">
        <b-button
            :variant="getGlobalStylesStatus ? 'success' : 'danger'"
            v-b-tooltip.hover.right
            title="Enable Global Styles"
            @click="setGlobalComponentStyles(! getGlobalStylesStatus)"
        >
            <icon :name="getGlobalStylesStatus ? 'toggle-on' : 'toggle-off'"></icon>
        </b-button>
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
