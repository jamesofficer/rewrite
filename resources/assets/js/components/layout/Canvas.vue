<template>
    <!-- CANVAS -->
    <b-container fluid
        :style="getElementStyles"
        :class="{ 'selected-element' : elementIsSelected }"
    >

        <row v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            :canvasIndex="canvasIndex"
            :rowIndex="rowIndex"
            @click.native.stop="selectElement(rowIndex)"
            class="selectable-element"
        ></row>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <add-row></add-row>

            <padding></padding>

            <background-color></background-color>

            <background-gradient></background-gradient>

            <image-selector></image-selector>

            <!-- Only need these for background images -->
            <template v-if="element.backgroundImage !== undefined && element.backgroundImage.includes('url')">
                <background-size></background-size>

                <background-position></background-position>
            </template>

            <!-- Clearing a background image also clears a background gradient -->
            <template v-if="element.backgroundImage">
                <clear-image></clear-image>
            </template>
        </top-bar>
    </b-container>
</template>

<script>
import GetElement         from '../mixins/GetElement'

import Row                from './Row'
import TopBar             from '../topbar/TopBar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'
import AddRow             from '../topbar/AddRow'
import AlignColumns       from '../topbar/AlignColumns'
import ClearImage         from '../topbar/ClearImage'

import Padding            from '../core/Padding'
import BackgroundColor    from '../core/BackgroundColor'
import BackgroundGradient from '../core/BackgroundGradient'
import BackgroundPosition from '../core/BackgroundPosition'
import BackgroundSize     from '../core/BackgroundSize'
import ImageSelector      from '../core/ImageSelector'

export default {
    name: "Canvas",

    components: {
        TopBar, Row,
        DeleteCloneMoveElement, AddRow,
        ClearImage, AlignColumns, BackgroundSize, Padding, BackgroundColor, BackgroundGradient, BackgroundPosition, ImageSelector,
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