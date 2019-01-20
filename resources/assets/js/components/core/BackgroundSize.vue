<template>
    <b-form-select size="sm" v-model="backgroundSize" :options="backgroundSizes" v-b-tooltip.hover.right title="Background Size"></b-form-select>
</template>

<script>
export default {
    name: "BackgroundSize",

    computed: {
        backgroundSize: {
            get () {
                return this.$store.getters.getSelectedElement.backgroundSize;
            },
            set (backgroundSize) {
                this.$store.commit('setComponentProperty', { property: 'backgroundSize', value: backgroundSize });
            }
        },
    },

    data() {
        return {
            backgroundSizes: ['Auto', 'Cover', 'Contain'],
        }
    }
}
</script>

