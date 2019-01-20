<template>
    <b-form-input
        size="sm"
        type="number"
        v-model="letterSpacing"
        @focusout.native="ensureValueIsNotEmpty('letterSpacing')"
        :min="-5"
        :max="100"
        step="0.1"
        v-b-tooltip.hover
        title="Letter Spacing"
    ></b-form-input>
</template>

<script>
import NoEmptyValues from '../mixins/EnsureNoEmptyValues';

export default {
    name: "LineHeight",

    mixins: [NoEmptyValues],

    computed: {
        letterSpacing: {
            get () {
                return this.$store.getters.getSelectedElement.letterSpacing;
            },
            set (spacing) {
                this.$store.commit('setComponentProperty', { property: 'letterSpacing', value: spacing });
            }
        },
    },
}
</script>