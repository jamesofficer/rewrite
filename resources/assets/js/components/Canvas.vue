<template>
    <!-- CANVAS -->
    <b-row @mouseover="hovering = true" @mouseout="hovering = false" :class="{ 'selected-canvas': elementIsSelected }" :style="{
        background: element.src ? 'url(' + element.src + ')' : backgroundColorString,
        backgroundSize:  element.backgroundSize,
        paddingTop: element.padding.top + 'px',
        paddingRight: element.padding.right + 'px',
        paddingBottom: element.padding.bottom + 'px',
        paddingLeft: element.padding.left + 'px',
    }">
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
import { mapGetters }    from 'vuex'

import Column            from './Column'
import TopBar            from './topbar/TopBar'
import RemoveCanvas      from './topbar/RemoveCanvas'
import AddColumn         from './topbar/AddColumn'
import ClearImage        from './topbar/ClearImage'
import BackgroundSize    from './topbar/BackgroundSize'

import Padding           from './core/Padding'
import BackgroundColor   from './core/BackgroundColor'
import ImageSelector     from './core/ImageSelector'

export default {
    name: "Canvas",

    components: {
        Column, TopBar, RemoveCanvas, AddColumn, ClearImage, BackgroundSize,
        Padding, BackgroundColor, ImageSelector,
    },

    props: {
        canvasIndex: {
            type: Number,
        },
    },

    computed: {
        ...mapGetters({
            getElement: 'getElement',
        }),

        columnCount: {
            get() {
                return this.$store.getters.columnCount(this.canvasIndex);
            },
            set(amount) {
                this.$store.commit('addColumnsToCanvas', amount);
            }
        },

        element() {
            return this.getElement(this.indexes);
        },

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

        backgroundColorString() {
            return 'rgba(' + this.element.backgroundColor.r + ', ' + this.element.backgroundColor.g + ', ' + this.element.backgroundColor.b + ', ' + this.element.backgroundColor.a + ')';
        },
    },

    data() {
        return {
            hovering: false,    // used to show and hide the edit button
            indexes: {
                canvasIndex: this.canvasIndex,
            }
        }
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
