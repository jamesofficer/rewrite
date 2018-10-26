<template>
    <b-row :style="getElementStyles">

        this is row {{ rowIndex }} on canvas {{ canvasIndex }}

        <!--<column v-for="(column, columnIndex) in columnCount"-->
                <!--v-bind:key="columnIndex"-->
                <!--v-bind:canvasIndex="canvasIndex"-->
                <!--v-bind:columnIndex="columnIndex"-->
                <!--@click.native.stop="selectColumn(columnIndex)"-->
                <!--class="shift-column"-->
        <!--&gt;</column>-->

    </b-row>
</template>

<script>
import GetElement from '../mixins/GetElement'
import Column from './Column'

export default {
    name: "Row",

    mixins: [GetElement],

    components: { Column },

    computed: {
        columnCount: {
            get() {
                return this.$store.getters.columnCount(this.canvasIndex);
            },
            set(amount) {
                this.$store.commit('addColumnsToCanvas', amount);
            }
        },
    },

    methods: {
        selectColumn(columnIndex) {
            this.$store.commit('selectColumn', {
                canvasIndex: this.canvasIndex,
                rowIndex: this.rowIndex,
                columnIndex: columnIndex,
            });
        },
    },
}
</script>