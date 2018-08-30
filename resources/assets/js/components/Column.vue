<template>
    <b-col :style="{
        backgroundColor: element.backgroundColor,
        paddingTop: element.padding.top + 'px',
        paddingRight: element.padding.right + 'px',
        paddingBottom: element.padding.bottom + 'px',
        paddingLeft: element.padding.left + 'px',
    }">
        <component v-for="(component, componentIndex) in columnComponents"
            :is="component.type"
            :key="componentIndex"
            :componentIndex="componentIndex"
            :canvasIndex="canvasIndex"
            :columnIndex="columnIndex"
            @click.native.stop="selectComponent(componentIndex)"
            class="shift-component"
        ></component>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <remove-column></remove-column>

            <add-component-button></add-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Column">
            <background-color></background-color>

            <padding></padding>
        </sidebar>
    </b-col>
</template>

<script>
import { mapGetters }      from 'vuex'

import Sidebar             from './sidebar/Sidebar'
import SidebarControl      from './sidebar/SidebarControl'

import TopBar              from './topbar/TopBar'
import AddComponentButton  from './topbar/AddComponentButton'
import RemoveColumn        from './topbar/RemoveColumn'

import Heading             from './Heading'
import Paragraph           from './Paragraph'
import BlockQuote          from './BlockQuote'

import Padding             from './core/Padding'
import BackgroundColor     from './core/BackgroundColor'

export default {
    name: "Column",

    components: {
        Sidebar, SidebarControl,
        TopBar, AddComponentButton, RemoveColumn,
        Heading, Paragraph, BlockQuote,
        Padding, BackgroundColor
    },

    props: {
        canvasIndex: {
            type: Number,
            required: true,
        },

        columnIndex: {
            type: Number,
            required: true,
        },
    },

    computed: {
        ...mapGetters({
            getElement: 'getElement',
        }),

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

        columnComponents() {
            return this.$store.getters.getComponentsForColumn(this.indexes);
        },

        element() {
            return this.getElement(this.indexes);
        },
    },

    data() {
        return {
            hovering: false,    // used to show and hide the edit button
            indexes: {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
            }
        }
    },

    methods: {
        selectComponent(componentIndex) {
            this.$store.commit('selectComponent', {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
                componentIndex: componentIndex,
            });
        },
    }
}
</script>

<style scoped>
.shift-component:hover {
    cursor: pointer;
    outline: 1px solid #abf3c9;
}

.component-button-group {
    margin: 3px 0;
}
</style>