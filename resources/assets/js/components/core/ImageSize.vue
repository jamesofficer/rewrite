<template>
    <b-form-input size="sm" type="number" v-model="imageSize" :min="0" :max="100" step="1" v-b-tooltip.hover title="Image Size" class="top-bar-control"></b-form-input>
</template>

<script>
export default {
    name: "ImageSize",

    computed: {
        imageSize: {
            get () {
                return this.$store.getters.getCurrentElement.imageSize;
            },
            set (size) {
                this.$store.commit('setComponentProperty', { property: 'imageSize', value: size });
            }
        },
    },
}
</script>

