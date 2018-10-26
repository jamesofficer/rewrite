<template>
    <!-- CANVAS -->
    <b-container fluid :style="getElementStyles">

        {{ canvasIndex }}

        <row v-for="(row, rowIndex) in rowCount"
             @mouseover="hovering = true"
             @mouseout="hovering = false"
             :canvasIndex="canvasIndex"
             :rowIndex="rowIndex"
             :key="rowIndex"
             :style="getElementStyles"
             :class="{ 'selected-element': elementIsSelected }"
             @click.native.stop="selectElement(rowIndex)"
        ></row>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-canvas></delete-canvas>

            <clone-canvas></clone-canvas>

            <move-canvas></move-canvas>

            <add-row></add-row>

            <padding></padding>

            <!--<background-color></background-color>-->

            <!--<background-gradient></background-gradient>-->

            <!--<image-selector></image-selector>-->

            <!-- Only need these for background images -->
            <!--<template v-if="element.backgroundImage !== undefined && element.backgroundImage.includes('url')">-->
                <!--<background-size></background-size>-->

                <!--<background-position></background-position>-->
            <!--</template>-->

            <!-- Clearing a background image also clears a background gradient -->
            <!--<template v-if="element.backgroundImage">-->
                <!--<clear-image></clear-image>-->
            <!--</template>-->
        </top-bar>
    </b-container>
</template>

<script>
import GetElement         from '../mixins/GetElement'

import Row                from './Row'
import TopBar             from '../topbar/TopBar'
import DeleteCanvas       from '../topbar/DeleteCanvas'
import CloneCanvas        from '../topbar/CloneCanvas'
import MoveCanvas         from '../topbar/MoveCanvas'
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
        DeleteCanvas, CloneCanvas, MoveCanvas, AddRow,
        ClearImage, AlignColumns, BackgroundSize, Padding, BackgroundColor, BackgroundGradient, BackgroundPosition, ImageSelector,
    },

    mixins: [GetElement],

    computed: {
        rowCount() {
            return this.$store.getters.rowCount(this.canvasIndex);
        },
    },

    methods: {
        selectElement(rowIndex) {
            console.log(rowIndex);
            this.$store.commit('selectElement', {
                canvasIndex: this.canvasIndex,
                rowIndex: rowIndex,
            });
        },
    }
}
</script>