<template>
    <b-form-select size="sm"
                   v-model="fontWeight"
                   :options="fontWeights"
                   v-b-tooltip.hover
                   title="Font Weight"
                   class="top-bar-control"
    ></b-form-select>
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
                this.$store.commit('setComponentProperty', { property: 'fontWeight', value: weight });
            }
        },

        fontWeights() {
            return this.$store.getters.getCurrentElement.fontWeights;
        }
    },
}
</script>