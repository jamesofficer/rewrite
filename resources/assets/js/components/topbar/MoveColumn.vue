<template>
    <div style="display: inherit">
        <top-bar-control @click.native="moveColumnLeft" variant="outline-info" icon="arrow-left" tooltip="Move Left" :disabled="! canMoveLeft"></top-bar-control>
        <top-bar-control @click.native="moveColumnRight" variant="outline-info" icon="arrow-right" tooltip="Move Right" :disabled="! canMoveRight"></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "moveColumn",

    components: { TopBarControl },

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

