<template>
    <div class="sidebar-control">
        <sidebar-control
            @click.native="addRow"
            variant="outline-success"
            icon="columns"
            tooltip="Add Row to Canvas"
        ></sidebar-control>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "AddColumn",

    components: { SidebarControl },

    methods: {
        addRow() {
            this.$store.commit('addRow');
        },
    }
}
</script>
