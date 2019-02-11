<template>
    <b-button
        :variant="variant"
        v-b-tooltip.hover.bottom
        :title="tooltip"
        :disabled="disabled"
        :pressed="pressed"
        @click="hideColorPicker()"
    >
        <icon :name="icon"></icon> {{ label }}
    </b-button>
</template>

<script>
export default {
    name: "TopbarButton",

    props: {
        icon: {
            type: String,
            required: true,
        },

        variant: {
            type: String,
            required: false,
            default: 'secondary',
        },

        tooltip: {
            type: String,
            required: false,
        },

        label: {
            type: String,
            required: false,
        },

        pressed: {
            type: Boolean,
            required: false,
            default: false,
        },

        disabled: {
            type: Boolean,
            required: false,
            default: false,
        }
    },

    methods: {
        hideColorPicker() {
            this.$store.commit('colorpicker/resetColorPicker');
        }
    }
}
</script>