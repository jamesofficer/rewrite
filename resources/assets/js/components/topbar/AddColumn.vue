<template>
    <top-bar-control v-if="! reachedMaxColumns"
                    @click.native="addColumn"
                    variant="outline-success"
                    icon="columns"
                    label="Add Column"
                    tooltip="Add Column to Canvas (max 4)"
    ></top-bar-control>

    <!-- Have to wrap this in a div as tooltips don't render on disabled items. -->
    <div v-else v-b-tooltip.hover title="Column limit reached or there is not enough space for a new one.">
        <top-bar-control variant="outline-danger"
                     icon="columns"
                     label="Add Column"
                     :disabled="true"
        ></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "AddColumn",

    components: { TopBarControl },

    computed: {
        reachedMaxColumns() {
            return this.$store.getters.totalColumnWidth === 12;
        }
    },

    methods: {
        addColumn() {
            let newColumnsWidth = (12 - this.$store.getters.totalColumnWidth);

            this.$store.commit('addColumnToCanvas', newColumnsWidth);
        },
    }
}
</script>
