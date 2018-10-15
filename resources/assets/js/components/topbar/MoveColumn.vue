<template>
    <div style="display: inherit">
        <top-bar-control @click.native="moveColumnLeft" variant="outline-primary" icon="arrow-left" tooltip="Move Left" :disabled="cannotMoveLeft"></top-bar-control>
        <top-bar-control @click.native="moveColumnRight" variant="outline-primary" icon="arrow-right" tooltip="Move Right" :disabled="cannotMoveRight"></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "moveColumn",

    components: { TopBarControl },

    computed: {
        cannotMoveLeft() {
            return ! this.$store.getters.canMoveColumnLeft;
        },

        cannotMoveRight() {
            return ! this.$store.getters.canMoveColumnRight;
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

