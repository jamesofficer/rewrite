<template>
    <div>
        <!-- COMPONENT -->
        <div class="clickable-component">
            <h1 :style="{
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
            </h1>
        </div>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Heading">
            <text-input></text-input>

            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight-and-size></font-weight-and-size>

            <text-color></text-color>

            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters }    from 'vuex';
import Sidebar           from './sidebar/Sidebar'
import SidebarControl    from './sidebar/SidebarControl'

// Property Imports:
import TextInput         from './core/TextInput'
import TextAlignment     from './core/TextAlignment'
import FontFamily        from './core/FontFamily'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor         from './core/TextColor'
import Padding           from './core/Padding'

export default {
    name: "Heading",

    components: {
        Sidebar, SidebarControl,
        TextInput, FontFamily, TextAlignment, FontWeightAndSize, TextColor, Padding,
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
            getElement: 'getElement',
        }),

        element() {
            return this.getElement(this.indexes);
        },

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        }
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
h1 {
    margin: 0;
    padding: 0;
}
</style>
