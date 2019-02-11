<template>
    <div style="display: inline;">
        <div
            class="topbar-button"
            v-b-tooltip.hover.bottom
            :title="elementType === 'Column' ? 'Move Left' : 'Move Up'"
        >
            <topbar-button
                @click.native="moveElement('up')"
                :icon="elementType === 'Column' ? 'arrow-left' : 'arrow-up'"
                :disabled="! canMoveElementUp"
            ></topbar-button>
        </div>

        <div
            class="topbar-button"
            v-b-tooltip.hover.bottom
            :title="elementType === 'Column' ? 'Move Right' : 'Move Down'"
        >
            <topbar-button
                @click.native="moveElement('down')"
                :icon="elementType === 'Column' ? 'arrow-right' : 'arrow-down'"
                :disabled="! canMoveElementDown"
            ></topbar-button>
        </div>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "MoveElement",

    components: { TopbarButton },

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
