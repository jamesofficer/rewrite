<template>
    <top-bar-control @click.native="showAddComponentModal" variant="outline-success" icon="sitemap" label="Add Component"></top-bar-control>
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
            this.$store.commit('toggleAddComponentModal', true);
        }
    }
}
</script>

