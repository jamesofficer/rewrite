<template>
    <div class="sidebar-control">
        <sidebar-control
            @click.native="showAddComponentModal"
            variant="outline-success"
            icon="sitemap"
            tooltip="Add Component to Column"
        ></sidebar-control>
    </div>
</template>

<script>
import AddComponentModal from '../dialogs/AddComponentModal'
import SidebarControl     from './SidebarControl';

export default {
    name: "AddComponentButton",

    components: {
        AddComponentModal, SidebarControl,
    },

    methods: {
        showAddComponentModal() {
            this.$root.$emit('bv::show::modal', 'addComponentModal');
        }
    }
}
</script>

