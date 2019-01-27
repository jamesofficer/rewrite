<template>
    <div class="sidebar-control">
        <label class="style-panel-label">Image</label>
        <b-button variant="danger" v-b-tooltip.hover.right tooltip="Clear Image">
            <icon name="ban"></icon>
        </b-button>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "ClearImage",

    components: { SidebarControl },

    methods: {
        clearImage() {
            this.$store.commit('setComponentProperty', { property: 'backgroundImage', value: undefined });
            this.$store.commit('setComponentProperty', { property: 'backgroundSize', value: 'Auto' });
        },
    }
}
</script>

