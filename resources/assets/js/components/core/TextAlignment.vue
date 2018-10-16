<template>
    <b-button-group size="sm" class="top-bar-control">
        <b-button variant="outline-primary" @click="alignText('left')" v-b-tooltip.hover title="Align Left">
            <icon name="align-left"></icon>
        </b-button>

        <b-button variant="outline-primary" @click="alignText('center')" v-b-tooltip.hover title="Align Center">
            <icon name="align-center"></icon>
        </b-button>

        <b-button variant="outline-primary" @click="alignText('right')" v-b-tooltip.hover title="Align Right">
            <icon name="align-right"></icon>
        </b-button>

        <b-button variant="outline-primary" @click="alignText('justify')" v-b-tooltip.hover title="Justify">
            <icon name="align-justify"></icon>
        </b-button>
    </b-button-group>
</template>

<script>
export default {
    name: "TextAlignment",

    methods: {
        alignText(position) {
            this.$store.commit('setComponentProperty', { property: 'textAlign', value: position });
        },
    }
}
</script>
