<template>
    <top-bar-control v-if="! reachedMaxColumns"
                    @click.native="addColumn"
                    variant="outline-success"
                    icon="columns"
                    label="Add Column"
                    tooltip="Add Column to Canvas (max 4)"
    ></top-bar-control>

    <top-bar-control v-else
                    variant="outline-danger"
                    icon="columns"
                    label="Need Space or Max Reached"
                    :disabled="true"
    ></top-bar-control>
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
