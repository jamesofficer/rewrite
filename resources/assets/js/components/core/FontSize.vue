<template>
    <b-form-input
        size="sm"
        type="number"
        v-model.number="fontSize"
        @focusout.native="ensureValueIsNotEmpty('fontSize', 12)"
        :min="10"
        :max="64"
        v-b-tooltip.hover
        title="Font Size"
        class="top-bar-sm-input"
    ></b-form-input>
</template>

<script>
import NoEmptyValues from '../mixins/EnsureNoEmptyValues';

export default {
    name: "FontSize",

    mixins: [NoEmptyValues],

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