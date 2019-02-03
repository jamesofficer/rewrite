<template>
    <div class="move-column-wrapper">
        <topbar-button @click.native="moveColumnLeft" variant="outline-info" icon="arrow-left" tooltip="Move Left" :disabled="! canMoveLeft"></topbar-button>
        <topbar-button @click.native="moveColumnRight" variant="outline-info" icon="arrow-right" tooltip="Move Right" :disabled="! canMoveRight"></topbar-button>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "MoveColumn",

    components: { TopbarButton },

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
