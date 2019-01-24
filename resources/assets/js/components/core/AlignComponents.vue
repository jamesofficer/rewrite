<template>
    <div class="style-panel-input-container">
        <label class="style-panel-label">Column Width</label>

        <b-form-select
            v-model="componentAlignment"
            :options="alignmentOptions"
        ></b-form-select>
    </div>
</template>

<script>
export default {
    name: "AlignComponents",

    computed: {
        componentAlignment: {
            get() {
                return this.$store.getters.getSelectedElement.componentAlignment;
            },
            set(alignment) {
                this.$store.commit('setComponentProperty', { property: 'componentAlignment', value: alignment });
            }
        },
    },

    data() {
        return {
            alignmentOptions: [
                {
                    text: 'Top',
                    value: 'start',
                },
                {
                    text: 'Center',
                    value: 'center',
                },
                {
                    text: 'Bottom',
                    value: 'end',
                }
            ]
        }
    }
}
</script>

