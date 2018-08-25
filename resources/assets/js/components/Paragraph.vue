<template>
    <div class="clickable-component">
        <p :style="{
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
        </p>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected">
            <sidebar-title title="Paragraph"></sidebar-title>

            <text-area></text-area>

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

// Sidebar imports
import Sidebar        from './sidebar/Sidebar'
import SidebarTitle   from './sidebar/SidebarTitle'
import SidebarControl from './sidebar/SidebarControl'

// Property imports
import TextArea        from './core/TextArea'
import FontFamily      from './core/FontFamily'
import TextAlignment   from './core/TextAlignment'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor       from './core/TextColor'
import BackgroundColor from './core/BackgroundColor'
import Padding         from './core/Padding'

export default {

    components: {
        Sidebar, SidebarTitle, SidebarControl,
        TextArea, FontFamily, TextAlignment, FontWeightAndSize, TextColor,
        BackgroundColor, Padding
    },

    props: {
        index: {
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
            getElement: 'getElement',
        }),

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

        element() {
            return this.getElement(this.indexes);
        }
    },

    data() {
        return {
            indexes: {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
                componentIndex: this.index,
            }
        }
    },

}
</script>
