<template>
    <top-bar-control v-if="! reachedMaxColumns"
                    @click.native="addColumn"
                    variant="outline-success"
                    icon="columns"
                    label="Add Column"
                    tooltip="Add Column to Canvas"
    ></top-bar-control>

    <!-- Have to wrap this in a div as tooltips don't render on disabled items. -->
    <div v-else v-b-tooltip.hover title="Can't add column as there is not enough room.">
        <top-bar-control variant="outline-success"
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

            this.$store.commit('addColumn', newColumnsWidth);
        },
    }
}
</script>
