<template>
    <div>
        <div class="clickable-component">
            <p v-if="! editingText" @click="selectInput"  :style="{
                textAlign: element.textAlign,
                fontSize: element.fontSize + 'pt',
                fontFamily: element.fontFamily,
                fontWeight: element.fontWeight,
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                paddingTop: element.padding.top + 'px',
                paddingRight: element.padding.right + 'px',
                paddingBottom: element.padding.bottom + 'px',
                paddingLeft: element.padding.left + 'px',
            }" v-html="element.content"></p>

            <text-input v-else :textarea="true" @focusout.native="editingText = false"
                :style="{
                    fontFamily: element.fontFamily,
                    fontSize: element.fontSize + 'pt',
                    textAlign: element.textAlign,
                    color: element.textColor,
                }" size="lg" id="paragraph-input"
            ></text-input>
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Paragraph">
            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight-and-size></font-weight-and-size>

            <text-color></text-color>

            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters }     from 'vuex';
import TopBar            from './topbar/TopBar'
import Sidebar            from './sidebar/Sidebar'
import SidebarControl     from './sidebar/SidebarControl'
import DeleteComponentButton from './topbar/DeleteComponentButton'

// Property imports
import TextInput         from './core/TextInput'
import TextArea          from './core/TextArea'
import FontFamily        from './core/FontFamily'
import TextAlignment     from './core/TextAlignment'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor         from './core/TextColor'
import Padding           from './core/Padding'

export default {

    components: {
        Sidebar, SidebarControl, TopBar, DeleteComponentButton,
        TextInput, TextArea, FontFamily, TextAlignment, FontWeightAndSize, TextColor,
        Padding
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
        }
    },

    data() {
        return {
            editingText: false,

            indexes: {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
                componentIndex: this.componentIndex,
            }
        }
    },

    methods: {
        selectInput() {
            this.editingText = true;

            this.$nextTick(function () {
                let input = document.getElementById('paragraph-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },
    }

}
</script>
