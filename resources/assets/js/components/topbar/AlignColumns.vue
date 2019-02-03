<template>
    <b-form-select
        size="sm"
        v-model="columnAlignment"
        :options="alignmentOptions"
        v-b-tooltip.hover
        title="Column Alignment"
        class="sidebar-btn"
    ></b-form-select>
</template>

<script>
export default {
    name: "AlignColumns",

    computed: {
        columnAlignment: {
            get() {
                return this.$store.getters.getSelectedElement.columnAlignment;
            },
            set(alignment) {
                this.$store.commit('setComponentProperty', { property: 'columnAlignment', value: alignment });
            }
        },
    },

    data() {
        return {
            alignmentOptions: [
                {
                    text: 'Left',
                    value: 'start',
                },
                {
                    text: 'Center',
                    value: 'center',
                },
                {
                    text: 'Right',
                    value: 'end',
                },
                {
                    text: 'Fill Around',
                    value: 'around',
                },
                {
                    text: 'Fill Between',
                    value: 'between',
                }
            ]
        }
    }
}
</script>

