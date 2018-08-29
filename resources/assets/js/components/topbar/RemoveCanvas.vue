<template>
    <b-btn variant="outline-danger" size="sm" @click="removeCanvas">
        <icon name="palette"></icon> Remove Canvas
    </b-btn>
</template>

<script>
export default {
    name: "RemoveCanvas",

    methods: {
        removeCanvas() {
            this.$store.commit('removeCanvas');
        },
    }
}
</script>

