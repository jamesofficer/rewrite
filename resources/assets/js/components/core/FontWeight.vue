<template>
    <b-form-select size="sm" v-model="fontWeight" :options="fontWeights" v-b-tooltip.hover title="Font Weight" class="top-bar-control"></b-form-select>
</template>

<script>
export default {
    name: "FontWeight",

    computed: {
        fontWeight: {
            get () {
                return this.$store.getters.getCurrentElement.fontWeight;
            },
            set (weight) {
                this.$store.commit('setFontWeight', weight);
            }
        },
    },

    data() {
        return {
            fontWeights: [
            {
                text: 'Lightest',
                value: 100,
            },
            {
                text: 'Light',
                value: 300,
            },
            {
                text: 'Normal',
                value: 500,
            },
            {
                text: 'Bold',
                value: 700,
            },
            {
                text: 'Boldest',
                value: 900,
            },
            ]
        }
    }
}
</script>