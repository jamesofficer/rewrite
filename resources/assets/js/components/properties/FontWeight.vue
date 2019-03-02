<template>
    <div>
        <label class="style-panel-label">Font Weight</label>

        <b-form-select
            class="sidebar-text-input"
            size="sm"
            v-model="fontWeight"
            :options="fontWeights"
        ></b-form-select>
    </div>
</template>

<script>
export default {
    name: "FontWeight",

    computed: {
        fontWeight: {
            get () {
                return this.$store.getters.getSelectedElement.fontWeight;
            },
            set (weight) {
                this.$store.commit('setComponentProperty', { property: 'fontWeight', value: weight });
            }
        },

        fontWeights() {
            return this.$store.getters.getSelectedElement.fontWeights;
        }
    },
}
</script>