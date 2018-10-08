<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div :style="{
            textAlign: element.textAlign,
            fontSize: element.fontSize + 'pt',
            fontFamily: element.fontFamily,
            fontWeight: element.fontWeight,
            lineHeight: element.lineHeight,
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
            padding: element.padding.top + 'px ' + element.padding.right + 'px ' + element.padding.bottom + 'px ' + element.padding.left + 'px',
            borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
            borderStyle: element.border.style,
            borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
        }" v-html="element.content" />

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <move-component-up></move-component-up>

            <move-component-down></move-component-down>

            <edit-text-button></edit-text-button>

            <margin></margin>

            <padding></padding>

            <border></border>

            <text-color></text-color>

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
import GetBorderStyle    from './mixins/GetBorderStyle'

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

    mixins: [GetElement, MoveComponent, GetBorderStyle],

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
