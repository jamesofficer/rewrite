<template>
    <!-- CANVAS -->
    <div class="shift-canvas" @mouseover="hovering = true" @mouseout="hovering = false" :style="{
        backgroundColor: backgroundColor,
        paddingTop: element.padding.top + 'px',
        paddingRight: element.padding.right + 'px',
        paddingBottom: element.padding.bottom + 'px',
        paddingLeft: element.padding.left + 'px',
    }">
        <b-row style="border: 2px solid green">
            <column v-for="(column, columnIndex) in columnCount"
                v-bind:key="columnIndex"
                v-bind:canvasIndex="canvasIndex"
                v-bind:columnIndex="columnIndex"
                @click.native.stop="selectColumn(columnIndex)"
            ></column>
        </b-row>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected">
            <sidebar-title title="Canvas"></sidebar-title>

            <column-control></column-control>

            <background-color></background-color>

            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters }    from 'vuex'
import Column            from './Column'

import Sidebar           from './sidebar/Sidebar'
import SidebarTitle      from './sidebar/SidebarTitle'
import SidebarControl    from './sidebar/SidebarControl'
import ColumnControl     from './sidebar/ColumnControl'

// Property Imports:
import BackgroundColor from './core/BackgroundColor'
import Padding from './core/Padding'

export default {
    name: "Canvas",

    components: {
        Column, ColumnControl, Sidebar, SidebarTitle, SidebarControl,
        BackgroundColor, Padding
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

        backgroundColor() {
            return this.$store.state.canvases[this.canvasIndex].backgroundColor;
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

        deleteComponent(componentIndex, columnIndex) {
            this.$store.commit('deleteComponent', {
                canvasIndex: this.canvasIndex,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        },

        moveComponentUp(componentIndex, columnIndex) {
            this.$store.commit('moveComponentUp', {
                canvasIndex: this.canvasIndex,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        },

        moveComponentDown(componentIndex, columnIndex) {
            this.$store.commit('moveComponentDown', {
                canvasIndex: this.canvasIndex,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        },
    },
}
</script>
