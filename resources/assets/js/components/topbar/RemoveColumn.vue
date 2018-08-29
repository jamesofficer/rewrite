<template>
    <b-btn @click="removeColumn" size="sm" variant="outline-danger">
        <icon name="columns"></icon> Remove Column
    </b-btn>
</template>

<script>
export default {
    name: "RemoveColumn",

    methods: {
        removeColumn() {
            this.$store.commit('removeColumnFromCanvas');
        },
    }
}
</script>
