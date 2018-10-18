<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div :style="getElementStyles" v-html="element.content"></div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

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

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'
import EditTextButton    from './topbar/EditTextButton'

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

    mixins: [GetElement],

    components: {
        EditTextModal,
        TopBar, EditTextButton, DeleteCloneMove,
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
