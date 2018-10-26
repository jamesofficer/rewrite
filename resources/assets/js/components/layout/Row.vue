<template>
    <b-row
        :style="getElementStyles"
        :class="{ 'selected-element' : elementIsSelected }"
    >

        <!-- this is row {{ rowIndex }} on canvas {{ canvasIndex }} -->

        <br>

        <column v-for="(column, columnIndex) in columns"
                :key="columnIndex"
                :canvasIndex="canvasIndex"
                :rowIndex="rowIndex"
                :columnIndex="columnIndex"
                @click.native.stop="selectElement(columnIndex)"
                class="shift-column"
                style="outline: 1px solid red"
        ></column>

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
        columns() {
            let cols = this.$store.getters.columns({
                canvasIndex: this.canvasIndex,
                rowIndex: this.rowIndex,
                columnIndex: this.columnIndex,
            });

            console.log(cols);

            return cols;
        },
    },

    methods: {
        selectElement(columnIndex) {
            this.$store.commit('selectElement', {
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