<template>
    <div class="sidebar-control">
        <sidebar-control
            v-if="! reachedMaxColumns"
            @click.native="addColumn"
            variant="outline-success"
            icon="columns"
            tooltip="Add Column to Canvas"
        ></sidebar-control>

        <!-- Have to wrap this in a div as tooltips don't render on disabled items. -->
        <div v-else v-b-tooltip.hover.right title="Can't add column as there is not enough room.">
            <sidebar-control
                variant="outline-success"
                icon="columns"
                :disabled="true"
            ></sidebar-control>
        </div>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "AddColumn",

    components: { SidebarControl },

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
