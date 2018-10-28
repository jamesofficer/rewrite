<template>
    <b-form-input size="sm" 
                  type="number"
                  v-model.number="fontSize" 
                  :min="10" 
                  :max="64" 
                  v-b-tooltip.hover 
                  title="Font Size" 
                  class="top-bar-sm-input"
    ></b-form-input>
</template>

<script>
export default {
    name: "FontSize",

    computed: {
        fontSize: {
            get () {
                return this.$store.getters.getSelectedElement.fontSize;
            },
            set (size) {
                this.$store.commit('setComponentProperty', { property: 'fontSize', value: size });
            }
        },
    },
}
</script>