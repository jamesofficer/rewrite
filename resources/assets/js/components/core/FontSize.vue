<template>
    <div>
        <label class="style-panel-label">Font Size</label>

        <b-form-input
            type="number"
            v-model.number="fontSize"
            @focusout.native="ensureValueIsNotEmpty('fontSize', 12)"
            :min="10"
            :max="64"
        ></b-form-input>
    </div>

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