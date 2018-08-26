<template>
    <!-- CANVAS -->
    <b-row @mouseover="hovering = true" @mouseout="hovering = false" :style="{
        backgroundColor: element.backgroundColor,
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

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Canvas">
            <add-column-control></add-column-control>

            <background-color></background-color>

            <padding></padding>
        </sidebar>
    </b-row>
</template>

<script>
import { mapGetters }    from 'vuex'

import Sidebar           from './sidebar/Sidebar'
import SidebarControl    from './sidebar/SidebarControl'
import AddColumnControl  from './sidebar/AddColumnControl'

import Column            from './Column'
import BackgroundColor   from './core/BackgroundColor'
import Padding           from './core/Padding'

export default {
    name: "Canvas",

    components: {
        Column, AddColumnControl, Sidebar, SidebarControl,
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

<style scoped>
.shift-column:hover {
    cursor: pointer;
    outline: 2px solid #66e99d;
}
</style>
