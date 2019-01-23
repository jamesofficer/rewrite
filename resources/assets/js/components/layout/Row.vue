<template>
    <b-row
        :id="getElementIdentifier"
        :class="{ 'selected-element' : elementIsSelected }"
        :style="getElementStyles"
    >
        <column
            v-for="(column, columnIndex) in columns"
            :key="columnIndex"
            :canvasIndex="canvasIndex"
            :rowIndex="rowIndex"
            :columnIndex="columnIndex"
            @click.native.stop="selectElement(columnIndex)"
            class="selectable-element"
            v-show="column.visible"
        ></column>

        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <add-column></add-column>

            <element-positioning :showWidth="false"></element-positioning>

            <element-background :element="element"></element-background>

            <element-borders></element-borders>

            <element-box-shadow></element-box-shadow>
        </sidebar>
    </b-row>
</template>

<script>
import GetElement             from '../mixins/GetElement'

import Sidebar                 from '../sidebar/Sidebar'
import DeleteCloneMoveElement from '../sidebar/DeleteCloneMoveElement'
import AddColumn              from '../sidebar/AddColumn'

import Column                 from './Column'

import ElementPositioning     from '../panels/ElementPositioning'
import ElementBackground      from '../panels/ElementBackground'
import ElementBorders         from '../panels/ElementBorders'
import ElementBoxShadow       from '../panels/ElementBoxShadow'

export default {
    name: "Row",

    mixins: [GetElement],

    components: {
        Sidebar, Column, DeleteCloneMoveElement, AddColumn,
        ElementPositioning, ElementBackground, ElementBorders, ElementBoxShadow
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