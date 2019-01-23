<template>
    <!-- CANVAS -->
    <b-container fluid
        :id="getElementIdentifier"
        :class="{ 'selected-element' : elementIsSelected }"
        :style="getElementStyles"
    >
        <row
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            :canvasIndex="canvasIndex"
            :rowIndex="rowIndex"
            @click.native.stop="selectElement(rowIndex)"
            class="selectable-element"
            v-show="row.visible"
        ></row>

        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <add-row></add-row>

            <element-positioning :showMargins="false" :showWidth="false"></element-positioning>

            <element-background :element="element"></element-background>
        </sidebar>
    </b-container>
</template>

<script>
import GetElement         from '../mixins/GetElement'

import Row                from './Row'
import Sidebar             from '../sidebar/Sidebar'
import DeleteCloneMoveElement from '../sidebar/DeleteCloneMoveElement'
import AddRow             from '../sidebar/AddRow'

import ElementPositioning from '../panels/ElementPositioning'
import ElementBackground  from '../panels/ElementBackground'

import AlignColumns       from '../sidebar/AlignColumns'
import ClearImage         from '../sidebar/ClearImage'

import Padding            from '../core/Padding'
import BackgroundPosition from '../core/BackgroundPosition'
import BackgroundSize     from '../core/BackgroundSize'
import ImageSelector      from '../core/ImageSelector'

export default {
    name: "Canvas",

    components: {
        Sidebar, Row, DeleteCloneMoveElement, AddRow,
        ElementPositioning, ElementBackground,
        ClearImage, AlignColumns, BackgroundSize,
        BackgroundPosition, ImageSelector,
    },

    mixins: [GetElement],

    computed: {
        rows() {
            return this.$store.getters.rows({
                canvasIndex: this.canvasIndex
            });
        },
    },

    methods: {
        selectElement(rowIndex) {
            this.$store.commit('selectElement', {
                canvasIndex: this.canvasIndex,
                rowIndex: rowIndex,
            });
        },
    }
}
</script>