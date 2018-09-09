<template>
    <div>
        <div class="text-center" v-if="! element.src">
            <icon name="image" scale="5" style="color: gray"></icon>
        </div>

        <img v-else :src="element.src" style="max-width: 100%">

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Image">
            <image-selector></image-selector>

            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters }    from 'vuex';
import TopBar            from './topbar/TopBar'
import Sidebar           from './sidebar/Sidebar'
import SidebarControl    from './sidebar/SidebarControl'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import ImageSelector     from './core/ImageSelector'
import Padding           from './core/Padding'

export default {
    name: "Picture",

    components: {
        Sidebar, SidebarControl, TopBar, DeleteComponentButton,
        ImageSelector, Padding
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

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

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
    },
}
</script>
