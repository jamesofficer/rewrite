<template>
    <div style="display: inherit">
        <top-bar-control @click.native="moveComponentUp" variant="outline-primary" icon="arrow-up" tooltip="Move Up" :disabled="canMoveDown"></top-bar-control>
        <top-bar-control @click.native="moveComponentDown" variant="outline-primary" icon="arrow-down" tooltip="Move Down" :disabled="canMoveUp"></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "MoveComponent",

    components: { TopBarControl },

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

