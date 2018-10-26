<template>
    <b-row
        :style="getElementStyles"
        :class="{ 'selected-element' : elementIsSelected }"
    >

        this is row {{ rowIndex }} on canvas {{ canvasIndex }}

        <!--<column v-for="(column, columnIndex) in columnCount"-->
                <!--v-bind:key="columnIndex"-->
                <!--v-bind:canvasIndex="canvasIndex"-->
                <!--v-bind:columnIndex="columnIndex"-->
                <!--@click.native.stop="selectColumn(columnIndex)"-->
                <!--class="shift-column"-->
        <!--&gt;</column>-->

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <p>Row {{ rowIndex }}</p>
        </top-bar>
    </b-row>
</template>

<script>
import GetElement from '../mixins/GetElement'
import Column from './Column'

import TopBar from '../topbar/TopBar'

export default {
    name: "Row",

    mixins: [GetElement],

    components: {
        TopBar, Column
    },

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

<style>
.shift-row {
    background: lime !important;
    z-index: 5;
    cursor: pointer;
}

.shift-row:hover {
    background: red !important;
}
</style>