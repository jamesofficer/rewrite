<template>
    <div class="topbar-button">
        <b-button
            @click="addColumn"
            variant="primary"
            v-b-tooltip.hover.bottom
            title="Add Column to Canvas"
        >
            <icon name="columns"></icon>
        </b-button>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "AddColumn",

    components: { TopbarButton },

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
