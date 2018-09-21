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
            set (width) {
                let currentColumnsUsed = this.$store.getters.totalColumnWidth;

                let itWillBe = currentColumnsUsed + width;

                if (itWillBe > 12) {
                    console.log('sorry but too big')
                    return;
                }

                console.log('used: ' + currentColumnsUsed)
                console.log(width);



                this.$store.commit('setComponentProperty', { property: 'columnWidth', value: width });
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

