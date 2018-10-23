<template>
    <div>
        <div :style="getElementStyles" v-html="element.content" :class="{ 'selected-element': elementIsSelected }" @dblclick="showEditTextModal"></div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <edit-text-button ref="editTextButton"></edit-text-button>

            <margin></margin>

            <padding></padding>

            <border></border>

            <text-color></text-color>

            <text-shadow></text-shadow>

            <text-alignment></text-alignment>

            <font-family></font-family>

            <font-size></font-size>

            <font-weight></font-weight>

            <line-height></line-height>

            <letter-spacing></letter-spacing>

            <width></width>
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
import Border            from './core/Border'
import TextInput         from './core/TextInput'
import FontFamily        from './core/FontFamily'
import TextAlignment     from './core/TextAlignment'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import TextColor         from './core/TextColor'
import TextShadow        from './core/TextShadow'
import LineHeight        from './core/LineHeight'
import LetterSpacing     from './core/LetterSpacing'
import Width             from './core/Width'

export default {
    name: "Paragraph",

    mixins: [GetElement],

    components: {
        EditTextModal,
        TopBar, EditTextButton, DeleteCloneMove,
        Margin, Padding, Border,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, LineHeight, TextColor, TextShadow, LetterSpacing, Width
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

        showEditTextModal() {
            this.$root.$emit('bv::show::modal', 'editTextModal');
        }
    }
}
</script>
