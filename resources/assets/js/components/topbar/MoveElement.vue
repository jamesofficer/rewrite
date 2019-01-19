<template>
    <div class="move-element-wrapper">
        <top-bar-control
            @click.native="moveElement('up')"
            variant="outline-info"
            :icon="elementType === 'Column' ? 'arrow-left' : 'arrow-up'"
            tooltip="Move Up"
            :disabled="! canMoveElementUp"
        ></top-bar-control>

        <top-bar-control
            @click.native="moveElement('down')"
            variant="outline-info"
            :icon="elementType === 'Column' ? 'arrow-right' : 'arrow-down'"
            tooltip="Move Down"
            :disabled="! canMoveElementDown"
        ></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "MoveElement",

    components: { TopBarControl },

    computed: {
        elementType() {
            return this.$store.getters.getSelectedElementType;
        },

        canMoveElementUp() {
            return this.$store.getters.canMoveElementUp;
        },

        canMoveElementDown() {
            return this.$store.getters.canMoveElementDown;
        },
    },

    methods: {
        moveElement(direction) {
            this.$store.commit('moveElement', direction);
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

