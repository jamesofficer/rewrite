<template>
    <div>
        <!-- <img :src="imageSource" alt="Image" :style="{
            width: '100%',
            paddingTop: element.padding.top + 'px',
            paddingRight: element.padding.right + 'px',
            paddingBottom: element.padding.bottom + 'px',
            paddingLeft: element.padding.left + 'px',
        }"> -->

        <p>some image here...</p>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Image">
            <image-source></image-source>

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
import ImageSource       from './core/ImageSource'
import Padding           from './core/Padding'

export default {
    name: "Picture",

    components: {
        Sidebar, SidebarControl, TopBar, DeleteComponentButton,
        ImageSource, Padding
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

        imageSource() {
            console.log('getting image source');
            return this.$store.getters.getCurrentElement.imageSource;
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
    },
}
</script>
