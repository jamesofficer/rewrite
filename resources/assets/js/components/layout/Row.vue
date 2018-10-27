<template>
    <b-row
        :style="getElementStyles"
        :class="{ 'selected-element' : elementIsSelected }"
    >
        <column v-for="(column, columnIndex) in columns"
                :key="columnIndex"
                :canvasIndex="canvasIndex"
                :rowIndex="rowIndex"
                :columnIndex="columnIndex"
                @click.native.stop="selectElement(columnIndex)"
                class="selectable-element"
        ></column>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-element></delete-element>

            <clone-element elementType="Row"></clone-element>
        </top-bar>
    </b-row>
</template>

<script>
import GetElement from '../mixins/GetElement'
import Column from './Column'
import CloneElement       from '../topbar/CloneElement'
import DeleteElement       from '../topbar/DeleteElement'


import TopBar from '../topbar/TopBar'

export default {
    name: "Row",

    mixins: [GetElement],

    components: {
        TopBar, Column, CloneElement, DeleteElement
    },

    computed: {
        columns() {
            let cols = this.$store.getters.columns({
                canvasIndex: this.canvasIndex,
                rowIndex: this.rowIndex,
                columnIndex: this.columnIndex,
            });

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