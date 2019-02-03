<template>
    <div class="topbar-button">
        <topbar-button
            @click.native="showAddComponentModal"
            variant="outline-success"
            icon="sitemap"
            tooltip="Add Component to Column"
        ></topbar-button>
    </div>
</template>

<script>
import AddComponentModal from '../dialogs/AddComponentModal'
import TopbarButton     from './TopbarButton';

export default {
    name: "AddComponentButton",

    components: {
        AddComponentModal, TopbarButton,
    },

    methods: {
        showAddComponentModal() {
            this.$root.$emit('bv::show::modal', 'addComponentModal');
        }
    }
}
</script>

