<template>
    <b-button-group size="sm" class="top-bar-control">
        <b-button variant="outline-success" @click="alignText('left')" v-b-tooltip.hover title="Left">
            <icon name="align-left"></icon>
        </b-button>

        <b-button variant="outline-success" @click="alignText('center')" v-b-tooltip.hover title="Center">
            <icon name="align-center"></icon>
        </b-button>

        <b-button variant="outline-success" @click="alignText('right')" v-b-tooltip.hover title="Right">
            <icon name="align-right"></icon>
        </b-button>

        <b-button variant="outline-success" @click="alignText('justified')" v-b-tooltip.hover title="Justify">
            <icon name="align-justify"></icon>
        </b-button>
    </b-button-group>
</template>

<script>
export default {
    name: "TextAlignment",

    methods: {
        alignText(position) {
            this.$store.commit('setTextAlignment', position);
        },
    }
}
</script>
