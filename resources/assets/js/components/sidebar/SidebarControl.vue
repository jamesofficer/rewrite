<template>
    <b-button
        :variant="variant"
        v-b-tooltip.hover.right
        :title="tooltip"
        :disabled="disabled"
        :pressed="pressed"
    >
        <icon :name="icon"></icon> {{ label }}
    </b-button>
</template>

<script>
export default {
    name: "SidebarControl",

    props: {
        icon: {
            type: String,
            required: true,
        },

        variant: {
            type: String,
            required: false,
            default: 'outline-primary',
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
    }
}
</script>