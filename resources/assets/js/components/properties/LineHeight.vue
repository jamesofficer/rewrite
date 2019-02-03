<template>
    <div>
        <label class="style-panel-label">Line Height</label>

        <b-form-input
            type="number"
            v-model="lineHeight"
            @focusout.native="ensureValueIsNotEmpty('lineHeight', 1)"
            :min="0"
            :max="25"
            step="0.1"
        ></b-form-input>
    </div>
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