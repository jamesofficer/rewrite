<template>
    <b-form-input size="sm" type="number" v-model="fontSize" :min="10" :max="64" v-b-tooltip.hover title="Font Size" class="top-bar-control top-bar-number-input"></b-form-input>
</template>

<script>
export default {
    name: "FontSize",

    computed: {
        fontSize: {
            get () {
                return this.$store.getters.getCurrentElement.fontSize;
            },
            set (size) {
                this.$store.commit('setComponentProperty', { property: 'fontSize', value: size });
            }
        },
    },
}
</script>