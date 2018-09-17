<template>
    <b-button-group size="sm" class="top-bar-control">
        <b-button variant="outline-success" @click="alignImage('left')" v-b-tooltip.hover title="Align Left">
            Left
        </b-button>

        <b-button variant="outline-success" @click="alignImage('center')" v-b-tooltip.hover title="Align Center">
            Center
        </b-button>

        <b-button variant="outline-success" @click="alignImage('right')" v-b-tooltip.hover title="Align Right">
            Right
        </b-button>
    </b-button-group>
</template>

<script>
export default {
    name: "ImageAlign",

    methods: {
        alignImage(position) {
            // Image Align actually uses the text-align css property to align the image.
            this.$store.commit('setComponentProperty', { property: 'textAlign', value: position });
        },
    }
}
</script>
