<template>
    <b-dropdown id="ddown1" text="Column Width" variant="outline-primary" size="sm" class="top-bar-control">
        <b-dropdown-item v-for="(width, index) in widths" :key="index" @click="setColumnWidth(width.value)">
            {{ width.text }}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
    name: "ColumnWidth",

    data() {
        return {
            widths: [
                {
                    text: 'Full Width',
                    value: 12,
                },
                {
                    text: '3/4 - Three Quarters',
                    value: 9,
                },
                {
                    text: '1/2 - One Half',
                    value: 6,
                },
                {
                    text: '1/4 - One Quarter',
                    value: 3,
                },
            ]
        }
    },

    methods: {
        setColumnWidth(columnWidth) {
            this.$store.commit('setColumnWidth', columnWidth);
        }
    }
}
</script>

