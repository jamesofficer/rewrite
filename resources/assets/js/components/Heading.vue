<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <!-- COMPONENT -->
        <h1 v-if="! editingText" @dblclick="selectInput" :style="{
                textAlign: element.textAlign,
                fontSize: element.fontSize + 'pt',
                fontFamily: element.fontFamily,
                fontWeight: element.fontWeight,
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                paddingTop: element.padding.top + 'px',
                paddingRight: element.padding.right + 'px',
                paddingBottom: element.padding.bottom + 'px',
                paddingLeft: element.padding.left + 'px',
                marginTop: element.margin.top + 'px',
                marginRight: element.margin.right + 'px',
                marginBottom: element.margin.bottom + 'px',
                marginLeft: element.margin.left + 'px',
            }" v-html="element.content"
        ></h1>

        <text-input v-else @focusout.native="editingText = false" :style="{
                textAlign: element.textAlign,
                fontSize: element.fontSize + 'pt',
                fontFamily: element.fontFamily,
                fontWeight: element.fontWeight,
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                marginTop: element.margin.top + 'px',
                marginRight: element.margin.right + 'px',
                marginBottom: element.margin.bottom + 'px',
                marginLeft: element.margin.left + 'px',
            }" size="lg" id="heading-input"
        ></text-input>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight></font-weight>

            <font-size></font-size>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteComponentButton from './topbar/DeleteComponentButton'

// Property Imports:
import TextInput         from './core/TextInput'
import TextAlignment     from './core/TextAlignment'
import FontFamily        from './core/FontFamily'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import TextColor         from './core/TextColor'
import Padding           from './core/Padding'
import Margin            from './core/Margin'

export default {
    name: "Heading",

    mixins: [GetElement],

    components: {
        TopBar, DeleteComponentButton,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, TextColor, Padding, Margin,
    },

    data() {
        return {
            editingText: false,
        }
    },

    methods: {
        selectInput() {
            this.editingText = true;

            this.$nextTick(function () {
                let input = document.getElementById('heading-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },
    }
}
</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }
</style>
