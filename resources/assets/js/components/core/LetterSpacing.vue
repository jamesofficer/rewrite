<template>
    <b-form-input size="sm" type="number" v-model="letterSpacing" :min="-1" :max="100" step="0.1" v-b-tooltip.hover title="Letter Spacing" class="top-bar-control top-bar-number-input"></b-form-input>
</template>

<script>
export default {
    name: "LineHeight",

    computed: {
        letterSpacing: {
            get () {
                return this.$store.getters.getCurrentElement.letterSpacing;
            },
            set (spacing) {
                this.$store.commit('setComponentProperty', { property: 'letterSpacing', value: spacing });
            }
        },
    },
}
</script>