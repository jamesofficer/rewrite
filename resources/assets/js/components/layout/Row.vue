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
            <delete-clone-move-element></delete-clone-move-element>

            <add-column></add-column>

            <margin></margin>

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
    </b-row>
</template>

<script>
import GetElement from '../mixins/GetElement'

import TopBar                 from '../topbar/TopBar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'
import AddColumn              from '../topbar/AddColumn'

import Margin                 from '../core/Margin'
import Padding                from '../core/Padding'
import BackgroundColor        from '../core/BackgroundColor'
import BackgroundGradient     from '../core/BackgroundGradient'
import BackgroundPosition     from '../core/BackgroundPosition'
import BackgroundSize         from '../core/BackgroundSize'
import ImageSelector          from '../core/ImageSelector'
import ClearImage             from '../topbar/ClearImage'

import Column from './Column'

export default {
    name: "Row",

    mixins: [GetElement],

    components: {
        TopBar, Column, DeleteCloneMoveElement, AddColumn,
        Margin, Padding, BackgroundColor, BackgroundGradient, BackgroundPosition,
        BackgroundSize, ImageSelector, ClearImage,
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