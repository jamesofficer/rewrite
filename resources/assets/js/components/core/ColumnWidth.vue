<template>
    <b-form-select v-model="selectedWidth" @change="setColumnWidth" size="sm" title="Column Width">
        <option v-for="(width, index) in widths" :value="width.value" :disabled="checkColumnWidth(width.value)" :key="index">
            {{ width.text }}
        </option>
    </b-form-select>
</template>

<script>
export default {
    name: "ColumnWidth",

    computed: {
        selectedWidth: {
            get() {
                return this.$store.getters.getCurrentElement.columnWidth;
            },
            set(width) {
                this.$store.commit('setComponentProperty', { property: 'columnWidth', value: width });
            }
        }
    },

    data() {
        return {
            widths: [
                {
                    text: 'Full Width',
                    value: 12,
                },
                {
                    text: '11',
                    value: 11,
                },
                {
                    text: '10',
                    value: 10,
                },
                {
                    text: 'Three Quarters',
                    value: 9,
                },
                {
                    text: 'Two Thirds',
                    value: 8,
                },
                {
                    text: '7',
                    value: 7,
                },
                {
                    text: 'Half',
                    value: 6,
                },
                {
                    text: '5',
                    value: 5,
                },
                {
                    text: 'One Third',
                    value: 4,
                },
                {
                    text: 'One Quarter',
                    value: 3,
                },
                {
                    text: '2',
                    value: 2,
                },
                {
                    text: 'Single Column',
                    value: 1,
                },
            ]
        }
    },

    methods: {
        isSelected(width) {
            console.log(this.$store.getters.getCurrentElement.columnWidth + ' === ' + width);
            console.log(this.$store.getters.getCurrentElement.columnWidth === width);

            return this.$store.getters.getCurrentElement.columnWidth === width;
        },

        checkColumnWidth(newWidth) {
            const currentTotalWidth = this.$store.getters.totalColumnWidth;
            const oldWidth = this.$store.getters.getCurrentElement.columnWidth;

            const newTotalWidth = (currentTotalWidth - oldWidth) + newWidth;

            if (newTotalWidth > 12) {
                return true;
            }

            return false;
        },

        setColumnWidth(value) {
            this.$store.commit('setComponentProperty', { property: 'columnWidth', value: value });
        }
    }
}
</script>

