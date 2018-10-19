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

            <image-selector></image-selector>

            <template v-if="element.src">
                <background-size></background-size>

                <clear-image></clear-image>
            </template>
        </top-bar>
    </b-row>
</template>

<script>
import { mapGetters }  from 'vuex'
import GetElement      from './mixins/GetElement'

import Column          from './Column'
import TopBar          from './topbar/TopBar'
import RemoveCanvas    from './topbar/RemoveCanvas'
import MoveCanvas      from './topbar/MoveCanvas'
import AddColumn       from './topbar/AddColumn'
import ClearImage      from './topbar/ClearImage'
import BackgroundSize  from './topbar/BackgroundSize'

import Padding         from './core/Padding'
import BackgroundColor from './core/BackgroundColor'
import ImageSelector   from './core/ImageSelector'

export default {
    name: "Canvas",

    components: {
        Column, TopBar, RemoveCanvas, MoveCanvas, AddColumn, ClearImage, BackgroundSize,
        Padding, BackgroundColor, ImageSelector,
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

        backgroundColorString() {
            return 'rgba(' + this.element.backgroundColor.r + ', ' + this.element.backgroundColor.g + ', ' + this.element.backgroundColor.b + ', ' + this.element.backgroundColor.a + ')';
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
    outline: 1px solid #66e99d;
}
</style>
