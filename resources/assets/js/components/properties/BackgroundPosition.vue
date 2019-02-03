<template>
    <div>
        <label class="style-panel-label">Size</label>

        <b-form-select v-model="backgroundPosition" :options="positions" v-b-tooltip.hover.right title="Background Position"></b-form-select>
    </div>
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
