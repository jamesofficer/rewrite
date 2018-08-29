<template>
    <div class="clickable-component">
        <blockquote :style="{
            textAlign: element.textAlign,
            fontSize: element.fontSize + 'pt',
            fontFamily: element.fontFamily,
            fontWeight: element.fontWeight,
            color: element.textColor,
            backgroundColor: element.backgroundColor,
            paddingTop: element.padding.top + 'px',
            paddingRight: element.padding.right + 'px',
            paddingBottom: element.padding.bottom + 'px',
            paddingLeft: element.padding.left + 'px',
        }">
            {{ element.content }}
        </blockquote>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected(indexes)" title="BlockQuote">
            <text-input></text-input>

            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight-and-size></font-weight-and-size>

            <text-color></text-color>

            <background-color></background-color>

            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar        from './sidebar/Sidebar'
import SidebarControl from './sidebar/SidebarControl'

// Property Imports:
import TextInput       from './core/TextInput'
import TextAlignment   from './core/TextAlignment'
import FontFamily      from './core/FontFamily'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor       from './core/TextColor'
import BackgroundColor from './core/BackgroundColor'
import Padding         from './core/Padding'

export default {
    name: "BlockQuote",

    components: {
        Sidebar, SidebarControl,
        TextInput, FontFamily, TextAlignment, FontWeightAndSize, TextColor,
        BackgroundColor, Padding,
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
/* Blockquote Line for now */

blockquote {
    border-left: 5px solid #ccc;
}
</style>

