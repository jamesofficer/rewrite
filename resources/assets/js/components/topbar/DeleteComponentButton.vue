<template>
    <div style="display: inline">
        <b-btn size="sm" variant="outline-danger" @click="deleteComponent">
            <icon name="times"></icon> Delete Component
        </b-btn>
    </div>
</template>

<script>
export default {
    name: "DeleteComponentButton",

    methods: {
        deleteComponent() {
            this.$store.commit('deleteComponent');
        }
    }
}
</script>

