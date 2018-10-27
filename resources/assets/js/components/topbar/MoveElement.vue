<template>
    <div class="move-element-wrapper">
        <top-bar-control @click.native="moveElement('up')" variant="outline-info" icon="arrow-up" tooltip="Move Up" :disabled="! canMoveElement.up"></top-bar-control>
        <top-bar-control @click.native="moveElement('down')" variant="outline-info" icon="arrow-down" tooltip="Move Down" :disabled="! canMoveElement.down"></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "MoveElement",

    components: { TopBarControl },

    props: {
        elementType: {
            type: String,
            default: 'Component',
        }
    },

    computed: {
        canMoveElement() {
            return {
                up: this.$store.getters.canMoveCanvasUp,
                down: this.$store.getters.canMoveCanvasDown,
            }
        },
    },

    methods: {
        moveElement(direction) {
            this.$store.commit('moveElement', {
                type: this.elementType,
                direction: direction
            });
        },
    }
}
</script>

<style scoped>
.move-element-wrapper {
    display: inherit;
    margin-right: 10px;
}
</style>

