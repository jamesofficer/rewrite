<template>
    <b-form-select size="sm" v-model="backgroundPosition" :options="positions" v-b-tooltip.hover.right title="Background Position"></b-form-select>
</template>

<script>
export default {
    name: "BackgroundPosition",

    computed: {
        backgroundPosition: {
            get () {
                return this.$store.getters.getSelectedElement.backgroundPosition;
            },
            set (position) {
                this.$store.commit('setComponentProperty', { property: 'backgroundPosition', value: position });
            }
        },
    },

    data() {
        return {
            positions: [
                'Center', 'Top', 'Bottom', 'Left', 'Right',
            ],
        }
    }
}
</script>
