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
           <!-- OLD
            <h4>Please paste in a URL.</h4>
-->
        </div>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="FacebookEmbed">
            <text-input @input="forceUpdate" textarea="true" ref="urlInput"></text-input>
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
import FontWeightAndSize from './core/FontWeightAndSize'
import Padding           from './core/Padding'


export default {
    name: "FacebookEmbed",

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
/*
        waitingForUrl() {
            if (this.$refs.urlInput !== undefined) {
                if (this.$refs.urlInput.length === 0) {
                    return true;
                }

                return false;
            }
            
        }
        */
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

