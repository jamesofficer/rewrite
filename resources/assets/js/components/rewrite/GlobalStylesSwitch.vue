<template>
    <div class="topbar-button" style="width: 50px;">
        <b-button
            :variant="getGlobalStylesStatus ? 'success' : 'danger'"
            v-b-tooltip.hover.bottom
            title="Enable Global Styles"
            @click="setGlobalComponentStyles(! getGlobalStylesStatus)"
        >
            <icon :name="getGlobalStylesStatus ? 'toggle-on' : 'toggle-off'"></icon>
        </b-button>
    </div>
</template>

<script>
import TopbarButton from '../topbar/TopbarButton';

export default {
    name: "GlobalStylesSwitch",

    components: { TopbarButton },

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
