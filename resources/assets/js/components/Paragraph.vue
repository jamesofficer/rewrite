<template>
    <div>
        <div class="clickable-component">
            <p v-if="! editingText" @click="selectInput"  :style="{
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

            <text-input v-else :textarea="true" @focusout.native="editingText = false"
                :style="{
                    fontFamily: element.fontFamily,
                    fontSize: element.fontSize + 'pt',
                    textAlign: element.textAlign,
                    color: element.textColor,
                }" size="lg" id="paragraph-input"
            ></text-input>
        </div>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Paragraph">
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
import Sidebar           from './sidebar/Sidebar'
import SidebarControl    from './sidebar/SidebarControl'

// Property imports
import TextInput         from './core/TextInput'
import TextArea          from './core/TextArea'
import FontFamily        from './core/FontFamily'
import TextAlignment     from './core/TextAlignment'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor         from './core/TextColor'
import BackgroundColor   from './core/BackgroundColor'
import Padding           from './core/Padding'

export default {

    components: {
        Sidebar, SidebarControl, TextInput,
        TextArea, FontFamily, TextAlignment, FontWeightAndSize, TextColor,
        BackgroundColor, Padding
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
