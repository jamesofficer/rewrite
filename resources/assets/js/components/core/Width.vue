<template>
    <b-form-input size="sm" type="number" v-model="width" :min="0" :max="100" step="1" v-b-tooltip.hover title="Width" class="top-bar-control"></b-form-input>
</template>

<script>
export default {
    name: "Width",

    computed: {
        width: {
            get () {
                return this.$store.getters.getCurrentElement.width;
            },
            set (width) {
                this.$store.commit('setElementWidth', width);
            }
        },
    },
}
</script>

