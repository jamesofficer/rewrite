<template>
    <div style="display: inherit">
        <top-bar-control @click.native="moveCanvasUp" variant="outline-primary" icon="arrow-up" tooltip="Move Up" :disabled="! canMoveUp"></top-bar-control>
        <top-bar-control @click.native="moveCanvasDown" variant="outline-primary" icon="arrow-down" tooltip="Move Down" :disabled="! canMoveDown"></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "MoveCanvas",

    components: { TopBarControl },

    computed: {
        canMoveDown() {
            return this.$store.getters.canMoveCanvasDown;
        },

        canMoveUp() {
            return this.$store.getters.canMoveCanvasUp;
        },
    },

    methods: {
        moveCanvasUp() {
            this.$store.commit('moveCanvasUp');
        },

        moveCanvasDown() {
            this.$store.commit('moveCanvasDown');
        }
    }
}
</script>

