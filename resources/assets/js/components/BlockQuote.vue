<template>
    <div class="clickable-component">
        <blockquote :style="{
            textAlign: element.textAlign,
            fontSize: element.fontSize + 'pt',
            fontFamily: element.fontFamily,
            fontWeight: element.fontWeight,
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            BackgroundColor: 'rgba(' + element.backgroundColor.r + ', ' + element.backgroundColor.g + ', ' + element.backgroundColor.b + ', ' + element.backgroundColor.a + ')',
            paddingTop: element.padding.top + 'px',
            paddingRight: element.padding.right + 'px',
            paddingBottom: element.padding.bottom + 'px',
            paddingLeft: element.padding.left + 'px',

        }">
            {{ element.content }}
        </blockquote>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected(indexes)" title="BlockQuote">
            <text-input></text-input>

            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight-and-size></font-weight-and-size>

            <text-color></text-color>

            <background-color></background-color>

            <padding></padding>

            <set-border></set-border>

        </sidebar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopBar         from './topbar/TopBar'
import Sidebar        from './sidebar/Sidebar'
import SidebarControl from './sidebar/SidebarControl'
import DeleteComponentButton from './topbar/DeleteComponentButton'

// Property Imports:
import TextInput       from './core/TextInput'
import TextAlignment   from './core/TextAlignment'
import FontFamily      from './core/FontFamily'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor       from './core/TextColor'
import BackgroundColor from './core/BackgroundColor'
import Padding         from './core/Padding'
import SetBorder       from './core/SetBorder'

export default {
    name: "BlockQuote",

    components: {
        Sidebar, SidebarControl, TopBar, DeleteComponentButton,
        TextInput, FontFamily, TextAlignment, FontWeightAndSize, TextColor,
        BackgroundColor, Padding, SetBorder
    },

    props: {
        componentIndex: {
            type: Number,
            required: true,
        },

        columnIndex: {
            type: Number,
            required: true,
        },

        canvasIndex: {
            type: Number,
            required: true,
        }
    },

    computed: {
        ...mapGetters({
            elementIsSelected: 'elementIsSelected',
            getElement: 'getElement',
        }),

        element() {
            return this.getElement(this.indexes);
        },
    },

    data() {
        return {
            indexes: {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
                componentIndex: this.componentIndex,
            }
        }
    }
}
</script>

<style scoped>
blockquote {
    border-left: 5px solid #ccc;
}
</style>

