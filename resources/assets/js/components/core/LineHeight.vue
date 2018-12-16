<template>
    <b-form-input
        size="sm"
        type="number"
        v-model="lineHeight"
        @focusout.native="ensureValueIsNotEmpty('lineHeight', 1)"
        :min="0"
        :max="25"
        step="0.1"
        v-b-tooltip.hover
        title="Line Height"
        class="top-bar-sm-input"
    ></b-form-input>
</template>

<script>
import NoEmptyValues from '../mixins/EnsureNoEmptyValues';

export default {
    name: "LineHeight",

    mixins: [NoEmptyValues],

    computed: {
        lineHeight: {
            get () {
                return this.$store.getters.getSelectedElement.lineHeight;
            },
            set (height) {
                this.$store.commit('setComponentProperty', { property: 'lineHeight', value: height });
            }
        },
    },
}
</script>