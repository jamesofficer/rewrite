<template>
    <b-btn @click="addColumn" size="sm" variant="outline-success">
        <icon name="columns"></icon> Add Column
    </b-btn>
</template>

<script>
export default {
    name: "AddColumn",

    methods: {
        addColumn() {
            this.$store.commit('addColumnToCanvas');
        },
    }
}
</script>
