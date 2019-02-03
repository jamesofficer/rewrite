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
import Sidebar             from '../topbar/Topbar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'
import AddRow             from '../topbar/AddRow'

import ElementPositioning from '../panels/ElementPositioning'
import ElementBackground  from '../panels/ElementBackground'

import AlignColumns       from '../topbar/AlignColumns'
import ClearImage         from '../topbar/ClearImage'

import Padding            from '../properties/Padding'
import BackgroundPosition from '../properties/BackgroundPosition'
import BackgroundSize     from '../properties/BackgroundSize'
import ImageSelector      from '../properties/ImageSelector'

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