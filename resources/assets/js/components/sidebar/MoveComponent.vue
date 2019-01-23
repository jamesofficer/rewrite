<template>
    <div class="move-component-wrapper">
        <sidebar-control @click.native="moveComponentUp" variant="outline-info" icon="arrow-up" tooltip="Move Up" :disabled="! canMoveUp"></sidebar-control>
        <sidebar-control @click.native="moveComponentDown" variant="outline-info" icon="arrow-down" tooltip="Move Down" :disabled="! canMoveDown"></sidebar-control>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "MoveComponent",

    components: { SidebarControl },

    computed: {
        canMoveDown() {
            return this.$store.getters.canMoveComponentDown;
        },

        canMoveUp() {
            return this.$store.getters.canMoveComponentUp;
        },
    },

    methods: {
        moveComponentUp() {
            this.$store.commit('moveComponentUp');
        },

        moveComponentDown() {
            this.$store.commit('moveComponentDown');
        }
    }
}
</script>

<style scoped>
.move-component-wrapper {
    display: inherit;
    margin-right: 10px;
}
</style>


