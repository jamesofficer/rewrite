<template>
    <div>
        <label class="style-panel-label">Letter Spacing</label>

        <b-form-input
            class="sidebar-text-input"
            type="number"
            size="sm"
            v-model="letterSpacing"
            @focusout.native="ensureValueIsNotEmpty('letterSpacing')"
            :min="-5"
            :max="100"
            step="0.1"
        ></b-form-input>
    </div>
</template>

<script>
import NoEmptyValues from "../mixins/EnsureNoEmptyValues";

export default {
    name: "LineHeight",

    mixins: [NoEmptyValues],

    computed: {
        letterSpacing: {
            get() {
                return this.$store.getters.getSelectedElement.letterSpacing;
            },
            set(spacing) {
                this.$store.commit("setComponentProperty", {
                    property: "letterSpacing",
                    value: spacing,
                });
            },
        },
    },
};
</script>