<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div :style="{
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
        }" v-html="element.content" />

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <edit-text-button></edit-text-button>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>

            <text-alignment></text-alignment>
        </top-bar>
    </div>
</template>

<script>
import EditTextModal     from './dialogs/EditTextModal';

import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import EditTextButton    from './topbar/EditTextButton'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import FontFamily        from './core/FontFamily'
import TextAlignment     from './core/TextAlignment'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import TextColor         from './core/TextColor'
import Padding           from './core/Padding'
import Margin            from './core/Margin'

export default {
    name: "Paragraph",

    mixins: [GetElement],

    components: {
        EditTextModal,
        TopBar, EditTextButton, DeleteComponentButton,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, TextColor,
        Padding, Margin,
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
                let input = document.getElementById('paragraph-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },
    }
}
</script>
