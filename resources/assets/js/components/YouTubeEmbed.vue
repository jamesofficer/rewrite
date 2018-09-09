<template>
    <div>
        <!-- COMPONENT -->
        <div class="clickable-component">
            <code :style="{
                    paddingTop: element.padding.top + 'px',
                    paddingRight: element.padding.right + 'px',
                    paddingBottom: element.padding.bottom + 'px',
                    paddingLeft: element.padding.left + 'px',
                }" v-html="element.content">
            </code>
        </div>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="YouTube">
            <text-input :textarea="true" :inSidebar="true"></text-input>
            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters }    from 'vuex';
import Sidebar           from './sidebar/Sidebar'
import SidebarControl    from './sidebar/SidebarControl'

import TextInput         from './core/TextInput'
import FontWeightAndSize from './core/FontWeightAndSize'
import Padding           from './core/Padding'

export default {
    name: "YouTubeEmbed",

    components: {
        Sidebar, SidebarControl,
        TextInput, FontWeightAndSize, Padding,
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
    },
}
</script>

