<template>
    <div style="display: inline;">
        <div
            class="sidebar-control"
            v-b-tooltip.hover.right
            :title="elementType === 'Column' ? 'Move Left' : 'Move Up'"
        >
            <sidebar-control
                @click.native="moveElement('up')"
                variant="outline-info"
                :icon="elementType === 'Column' ? 'arrow-left' : 'arrow-up'"
                :disabled="! canMoveElementUp"
            ></sidebar-control>
        </div>

        <div
            class="sidebar-control"
            v-b-tooltip.hover.right
            :title="elementType === 'Column' ? 'Move Right' : 'Move Down'"
        >
            <sidebar-control
                @click.native="moveElement('down')"
                variant="outline-info"
                :icon="elementType === 'Column' ? 'arrow-right' : 'arrow-down'"
                :disabled="! canMoveElementDown"
            ></sidebar-control>
        </div>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "MoveElement",

    components: { SidebarControl },

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
