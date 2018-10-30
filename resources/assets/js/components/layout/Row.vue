<template>
    <b-row
        :style="getElementStyles"
        :class="{ 'selected-element' : elementIsSelected }"
    >
        <p>row</p>

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
            <delete-clone-move-element></delete-clone-move-element>

            <add-column></add-column>
        </top-bar>
    </b-row>
</template>

<script>
import GetElement from '../mixins/GetElement'

import TopBar                 from '../topbar/TopBar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'
import AddColumn              from '../topbar/AddColumn'

import Column from './Column'

export default {
    name: "Row",

    mixins: [GetElement],

    components: {
        TopBar, Column, DeleteCloneMoveElement, AddColumn,
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