<template>
    <div class="clickable-component">
        <p :style="{
            textAlign: getElement(indexes).textAlign,
            fontSize: getElement(indexes).fontSize + 'pt',
            fontFamily: getElement(indexes).fontFamily,
            fontWeight: getElement(indexes).fontWeight,
            color: getElement(indexes).textColor,
            backgroundColor: getElement(indexes).backgroundColor,
        }">
            {{ getElement(indexes).content }}
        </p>

        <!-- SIDEBAR -->
        <sidebar v-if="componentIsSelected(indexes)">
            <sidebar-title title="Paragraph"></sidebar-title>

            <text-area></text-area>

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

export default {

    components: {
        Sidebar, SidebarTitle, SidebarControl,
        TextArea, FontFamily, TextAlignment, FontWeightAndSize, TextColor, BackgroundColor
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
            elementIsSelected: 'elementIsSelected',
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
    },
    
}
</script>
