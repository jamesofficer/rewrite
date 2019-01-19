<template>
    <b-form-input 
        size="sm" 
        type="number"
        v-model.number="width"
        @focusout.native="ensureValueIsNotEmpty('width', 100)"
        :min="1"
        :max="100"
        v-b-tooltip.hover 
        title="Width (%)" 
        class="top-bar-sm-input"
    ></b-form-input>
</template>

<script>
import NoEmptyValues from '../mixins/EnsureNoEmptyValues';

export default {
    name: "Width",

    mixins: [NoEmptyValues],

    computed: {
        width: {
            get() {
                return this.$store.getters.getSelectedElement.width;
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
