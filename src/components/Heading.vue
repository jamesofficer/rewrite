<template>
    <div>
        <!-- COMPONENT -->
        <div class="clickable-component">
            <h1 :style="{
                textAlign: textAlign,
                fontSize: fontSize + 'pt',
                fontFamily: fontFamily,
            }">
                {{ content }}
            </h1>
        </div>

        <!-- SIDEBAR -->
        <sidebar v-if="componentIsSelected">
            <sidebar-title title="Heading"></sidebar-title>

            <text-content></text-content>

            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight-and-size></font-weight-and-size>
        </sidebar>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar        from './sidebar/Sidebar'
import SidebarTitle   from './sidebar/SidebarTitle'
import SidebarControl from './sidebar/SidebarControl'

// Property Imports:
import TextContent    from './core/TextContent'
import TextAlignment  from './core/TextAlignment'
import FontFamily     from './core/FontFamily'
import FontWeightAndSize from './core/FontWeightAndSize'

export default {
    name: "Heading",

    components: {
        Sidebar, SidebarControl, SidebarTitle,
        TextContent, FontFamily, TextAlignment, FontWeightAndSize
    },

    props: {
        index: {
            type: Number,
        },

        canvasIndex: {
            type: Number
        }
    },

    computed: {
        ...mapGetters({
            componentIsSelected: 'componentIsSelected',
        }),

        fontFamily() {
            return this.$store.state.canvases[this.canvasIndex].components[this.index].fontFamily;
        },

        content() {
            return this.$store.state.canvases[this.canvasIndex].components[this.index].content;
        },

        fontWeight() {
            return this.$store.state.canvases[this.canvasIndex].components[this.index].fontWeight;
        },

        fontSize() {
            return this.$store.state.canvases[this.canvasIndex].components[this.index].fontSize;
        },

        textAlign() {
            return this.$store.state.canvases[this.canvasIndex].components[this.index].textAlign;
        },
    },
}

</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }
</style>
