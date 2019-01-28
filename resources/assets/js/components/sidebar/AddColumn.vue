<template>
    <div class="sidebar-control">
        <b-button
            @click="addColumn"
            variant="outline-success"
            v-b-tooltip.hover.right
            title="Add Column to Canvas"
        >
            <icon name="columns"></icon>
        </b-button>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "AddColumn",

    components: { SidebarControl },

    methods: {
        addColumn() {
            let newColumnsWidth = (12 - this.$store.getters.totalColumnWidth);

            // If there's no space in the Row, the new column width will be zero (or less). So just set it to full width in this case.
            if (newColumnsWidth <= 0) {
                newColumnsWidth = 12;
            }

            this.$store.commit('addColumn', newColumnsWidth);
        },
    }
}
</script>
