<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div :style="{
            textAlign: element.textAlign,
            fontSize: element.fontSize + 'pt',
            fontFamily: element.fontFamily,
            fontWeight: element.fontWeight,
            lineHeight: element.lineHeight,
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            paddingTop: element.padding.top + 'px',
            paddingRight: element.padding.right + 'px',
            paddingBottom: element.padding.bottom + 'px',
            paddingLeft: element.padding.left + 'px',
            marginTop: element.margin.top + 'px',
            marginRight: element.margin.right + 'px',
            marginBottom: element.margin.bottom + 'px',
            marginLeft: element.margin.left + 'px',

            borderTop: element.border.top + 'px ' + 'solid ' + ' black',
            borderRight: element.border.right + 'px ' + 'solid' + 'black',
            borderBottom: element.border.bottom + 'px ' + 'solid' + 'black',
            borderLeft: element.border.left + 'px ' + 'solid' + 'black',
        }" v-html="element.content" />

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <move-component-up></move-component-up>

            <move-component-down></move-component-down>

            <edit-text-button></edit-text-button>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <border></border>

            <font-family></font-family>

            <font-size></font-size>

            <font-weight></font-weight>

            <line-height></line-height>

            <text-alignment></text-alignment>
        </top-bar>
    </div>
</template>

<script>
import EditTextModal     from './dialogs/EditTextModal'

import GetElement        from './mixins/GetElement'
import MoveComponent     from './mixins/MoveComponent'

import TopBar            from './topbar/TopBar'
import EditTextButton    from './topbar/EditTextButton'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import Margin            from './core/Margin'
import Padding           from './core/Padding'
import TextInput         from './core/TextInput'
import FontFamily        from './core/FontFamily'
import TextAlignment     from './core/TextAlignment'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import TextColor         from './core/TextColor'
import LineHeight        from './core/LineHeight'
import Border            from './core/Border'

export default {
    name: "Paragraph",

    mixins: [GetElement, MoveComponent],

    components: {
        EditTextModal,
        TopBar, EditTextButton, DeleteComponentButton,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, LineHeight, TextColor,
        Padding, Margin, Border,
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
