<template>
    <div class="sidebar-control">
        <top-bar-control
            @click.native="showAddComponentModal"
            variant="outline-success"
            icon="sitemap"
            tooltip="Add Component to Column"
        ></top-bar-control>
    </div>
</template>

<script>
import AddComponentModal from '../dialogs/AddComponentModal'
import TopBarControl     from './TopBarControl';

export default {
    name: "AddComponentButton",

    components: {
        AddComponentModal, TopBarControl,
    },

    methods: {
        showAddComponentModal() {
            this.$root.$emit('bv::show::modal', 'addComponentModal');
        }
    }
}
</script>

