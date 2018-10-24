<template>
    <b-btn size="sm" :variant="variant" v-b-tooltip.hover :title="tooltip" class="top-bar-btn" :disabled="disabled">
        <icon :name="icon"></icon> {{ label }}
    </b-btn>
</template>

<script>
export default {
    name: "TopBarControl",

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

        disabled: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>