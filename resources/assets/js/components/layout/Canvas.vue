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

        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <add-row></add-row>

            <element-positioning :showMargins="false" :showWidth="false"></element-positioning>

            <element-background :element="element"></element-background>
        </top-bar>
    </b-container>
</template>

<script>
import GetElement         from '../mixins/GetElement'

import Row                from './Row'
import TopBar             from '../topbar/TopBar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'
import AddRow             from '../topbar/AddRow'

import ElementPositioning from '../panels/ElementPositioning'
import ElementBackground  from '../panels/ElementBackground'

import AlignColumns       from '../topbar/AlignColumns'
import ClearImage         from '../topbar/ClearImage'

import Padding            from '../core/Padding'
import BackgroundPosition from '../core/BackgroundPosition'
import BackgroundSize     from '../core/BackgroundSize'
import ImageSelector      from '../core/ImageSelector'

export default {
    name: "Canvas",

    components: {
        TopBar, Row, DeleteCloneMoveElement, AddRow,
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