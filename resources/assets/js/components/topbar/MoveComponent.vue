<template>
    <div class="move-component-wrapper">
        <topbar-button @click.native="moveComponentUp" variant="outline-info" icon="arrow-up" tooltip="Move Up" :disabled="! canMoveUp"></topbar-button>
        <topbar-button @click.native="moveComponentDown" variant="outline-info" icon="arrow-down" tooltip="Move Down" :disabled="! canMoveDown"></topbar-button>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "MoveComponent",

    components: { TopbarButton },

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


