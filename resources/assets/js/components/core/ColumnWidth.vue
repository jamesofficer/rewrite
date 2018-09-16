<template>
    <b-form-select size="sm" v-model="columnWidth" :options="widths" class="top-bar-control" v-b-tooltip.hover title="Column Width"></b-form-select>
</template>

<script>
export default {
    name: "ColumnWidth",

    computed: {
        columnWidth: {
            get () {
                return this.$store.getters.getCurrentElement.columnWidth;
            },
            set (columnWidth) {
                this.$store.commit('setColumnWidth', columnWidth);
            }
        },
    },

    data() {
        return {
            widths: [
                {
                    text: 'Full Width',
                    value: 12,
                },
                {
                    text: 'Three Quarters',
                    value: 9,
                },
                {
                    text: 'One Half',
                    value: 6,
                },
                {
                    text: 'One Third',
                    value: 4,
                },
                {
                    text: 'One Quarter',
                    value: 3,
                },
            ]
        }
    },
}
</script>

