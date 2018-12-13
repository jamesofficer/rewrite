<template>
    <div id="global-styles-switch-wrapper">
        <b-form-checkbox
            v-model="enableGlobalStyles"
            :value="true"
            :unchecked-value="false"
            v-b-tooltip.hover title="Keeps component styling the same between device sizes."
            id="global-styles-switch"
        >
            Global Styles
        </b-form-checkbox>
    </div>
</template>

<script>
export default {
    name: "GlobalStylesSwitch",

    computed: {
        enableGlobalStyles: {
            get() {
                return this.$store.getters.getGlobalComponentStyles;
            },
            set(toggle) {
                this.$store.commit('enableGlobalComponentStyles', toggle);
            }
        },
    },

    mounted() {
        document.getElementById('global-styles-switch').checked = true;
    }
}
</script>

<style>
#global-styles-switch-wrapper {
    margin-top: 3px;
}
</style>
