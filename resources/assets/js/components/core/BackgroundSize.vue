<template>
    <b-form-select size="sm" v-model="backgroundSize" :options="backgroundSizes" class="top-bar-control" v-b-tooltip.hover title="Background Size"></b-form-select>
</template>

<script>
export default {
    name: "BackgroundSize",

    computed: {
        backgroundSize: {
            get () {
                return this.$store.getters.getCurrentElement.backgroundSize;
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

