<template>
    <div style="display: inline">
        <b-btn size="sm" variant="outline-primary" @click="showAddComponentModal">
            <icon name="sitemap"></icon> Add Component
        </b-btn>
    </div>
</template>

<script>
import AddComponentModal from '../dialogs/AddComponentModal'

export default {
    name: "AddComponentButton",

    components: {
        AddComponentModal,
    },

    methods: {
        showAddComponentModal() {
            this.$store.commit('toggleAddComponentModal', true);
        }
    }
}
</script>

