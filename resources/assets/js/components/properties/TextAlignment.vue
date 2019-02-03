<template>
    <div>
        <label class="style-panel-label d-block">Text Alignment</label>

        <b-button-group>
            <b-button variant="outline-primary" @click="alignText('left')">
                <icon name="align-left"></icon>
            </b-button>

            <b-button variant="outline-primary" @click="alignText('center')">
                <icon name="align-center"></icon>
            </b-button>

            <b-button variant="outline-primary" @click="alignText('right')">
                <icon name="align-right"></icon>
            </b-button>

            <b-button variant="outline-primary" @click="alignText('justify')">
                <icon name="align-justify"></icon>
            </b-button>
        </b-button-group>
    </div>
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
