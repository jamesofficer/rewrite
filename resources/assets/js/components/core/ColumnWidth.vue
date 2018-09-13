<template>
    <sidebar-control label="Column Width">
        <b-form-select v-model="columnWidth" :options="widths" class="mb-3" />
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "ColumnWidth",

    components: { SidebarControl },

    computed: {
        columnWidth: {
            get () {
                return this.$store.getters.getCurrentElement.columnWidth;
            },
            set (columnWidth) {
                console.log('new width is: ' + columnWidth)
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
    }
}
</script>

