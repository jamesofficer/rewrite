<template>
    <div class="move-column-wrapper">
        <sidebar-control @click.native="moveColumnLeft" variant="outline-info" icon="arrow-left" tooltip="Move Left" :disabled="! canMoveLeft"></sidebar-control>
        <sidebar-control @click.native="moveColumnRight" variant="outline-info" icon="arrow-right" tooltip="Move Right" :disabled="! canMoveRight"></sidebar-control>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "moveColumn",

    components: { SidebarControl },

    computed: {
        canMoveLeft() {
            return this.$store.getters.canMoveColumnLeft;
        },

        canMoveRight() {
            return this.$store.getters.canMoveColumnRight;
        },
    },

    methods: {
        moveColumnLeft() {
            this.$store.commit('moveColumnLeft');
        },

        moveColumnRight() {
            this.$store.commit('moveColumnRight');
        },
    }
}
</script>

<style scoped>
.move-column-wrapper {
    display: inherit;
    margin-right: 10px;
}
</style>
