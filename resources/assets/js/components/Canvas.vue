<template>
    <!-- CANVAS -->
    <b-row @mouseover="hovering = true" @mouseout="hovering = false" :class="{ 'selected-canvas': elementIsSelected }" :style="getElementStyles">
        <column v-for="(column, columnIndex) in columnCount"
            v-bind:key="columnIndex"
            v-bind:canvasIndex="canvasIndex"
            v-bind:columnIndex="columnIndex"
            @click.native.stop="selectColumn(columnIndex)"
            class="shift-column"
        ></column>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <remove-canvas></remove-canvas>

            <move-canvas></move-canvas>

            <add-column></add-column>

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
import { mapGetters }     from 'vuex'
import GetElement         from './mixins/GetElement'

import Column             from './Column'
import TopBar             from './topbar/TopBar'
import RemoveCanvas       from './topbar/RemoveCanvas'
import MoveCanvas         from './topbar/MoveCanvas'
import AddColumn          from './topbar/AddColumn'
import ClearImage         from './topbar/ClearImage'
import BackgroundSize     from './topbar/BackgroundSize'

import Padding            from './core/Padding'
import BackgroundColor    from './core/BackgroundColor'
import BackgroundGradient from './core/BackgroundGradient'
import BackgroundPosition from './core/BackgroundPosition'
import ImageSelector      from './core/ImageSelector'

export default {
    name: "Canvas",

    components: {
        Column, TopBar, RemoveCanvas, MoveCanvas, AddColumn, ClearImage, BackgroundSize,
        Padding, BackgroundColor, BackgroundGradient, BackgroundPosition, ImageSelector,
    },

    mixins: [GetElement],

    props: {
        canvasIndex: {
            type: Number,
        },
    },

    computed: {
        columnCount: {
            get() {
                return this.$store.getters.columnCount(this.canvasIndex);
            },
            set(amount) {
                this.$store.commit('addColumnsToCanvas', amount);
            }
        },
    },

    methods: {
        selectColumn(columnIndex) {
            this.$store.commit('selectColumn', {
                canvasIndex: this.canvasIndex,
                columnIndex: columnIndex,
            });
        },
    },
}
</script>

<style scoped>
.shift-column:hover {
    cursor: pointer;
    outline: 1px dashed #66e99d;
}
</style>
