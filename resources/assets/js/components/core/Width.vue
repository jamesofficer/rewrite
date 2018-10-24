<template>
    <b-form-input size="sm" 
                  type="number"
                  v-model.number="width" 
                  :min="1"
                  :max="100"
                  v-b-tooltip.hover 
                  title="Width (%)" 
                  class="top-bar-input"
    ></b-form-input>
</template>

<script>
export default {
    name: "Width",

    computed: {
        width: {
            get() {
                return this.$store.getters.getCurrentElement.width;
            },
            set(width) {
                this.$store.commit('setComponentProperty', { property: 'width', value: width });
            }
        }
    }
}
</script>

<style scoped>

</style>
