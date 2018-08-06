<template>
    <div>
        <!-- COMPONENT -->
        <div class="clickable-component">
            <h1 :style="{
                textAlign: getElement(indexes).textAlign,
                fontSize: getElement(indexes).fontSize + 'pt',
                fontFamily: getElement(indexes).fontFamily,
                color: getElement(indexes).textColor,
                backgroundColor: getElement(indexes).backgroundColor,
            }">
                {{ getElement(indexes).content }}
            </h1>
        </div>

        <!-- SIDEBAR -->
        <sidebar v-if="componentIsSelected">
            <sidebar-title title="Heading"></sidebar-title>

            <text-content></text-content>

            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight-and-size></font-weight-and-size>

            <text-color></text-color>

            <background-color></background-color>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar        from './sidebar/Sidebar'
import SidebarTitle   from './sidebar/SidebarTitle'
import SidebarControl from './sidebar/SidebarControl'

// Property Imports:
import TextContent     from './core/TextContent'
import TextAlignment   from './core/TextAlignment'
import FontFamily      from './core/FontFamily'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor       from './core/TextColor'
import BackgroundColor from './core/BackgroundColor'

export default {
    name: "Heading",

    components: {
        Sidebar, SidebarControl, SidebarTitle,
        TextContent, FontFamily, TextAlignment, FontWeightAndSize, TextColor, BackgroundColor
    },

    props: {
        index: {
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
            componentIsSelected: 'componentIsSelected',
            getElement: 'getElement',
        }),
    },

    data() {
        return {
            indexes: {
                canvasIndex: this.canvasIndex,
                componentIndex: this.index,
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
