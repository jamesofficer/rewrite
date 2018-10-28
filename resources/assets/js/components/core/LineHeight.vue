<template>
    <b-form-input size="sm"
                  type="number"
                  v-model="lineHeight"
                  :min="0"
                  :max="25"
                  step="0.1"
                  v-b-tooltip.hover
                  title="Line Height"
                  class="top-bar-sm-input"
    ></b-form-input>
</template>

<script>
export default {
    name: "LineHeight",

    computed: {
        lineHeight: {
            get () {
                return this.$store.getters.getCurrentElement.lineHeight;
            },
            set (height) {
                this.$store.commit('setComponentProperty', { property: 'lineHeight', value: height });
            }
        },
    },
}
</script>