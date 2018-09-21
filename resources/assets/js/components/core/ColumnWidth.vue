<template>
    <b-form-select v-model="selectedWidth" @change="setColumnWidth" size="sm">
        <option v-for="width in widths" :value="width.value" :disabled="checkColumnWidth(width.value)">
            {{ width.text }}
        </option>
    </b-form-select>
</template>

<script>
export default {
    name: "ColumnWidth",

    data() {
        return {
            selectedWidth: 6,

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

