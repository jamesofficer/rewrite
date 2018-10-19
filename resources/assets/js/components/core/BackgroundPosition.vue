<template>
    <b-form-select size="sm" v-model="backgroundPosition" :options="positions" class="top-bar-control" v-b-tooltip.hover title="Background Position"></b-form-select>
</template>

<script>
export default {
    name: "BackgroundPosition",

    computed: {
        backgroundPosition: {
            get () {
                return this.$store.getters.getCurrentElement.backgroundPosition;
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
