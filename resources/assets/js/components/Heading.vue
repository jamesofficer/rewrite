<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ width: element.width + '%' }">
        <!-- COMPONENT -->
        <h1 v-if="! editingText" @dblclick="selectInput" :style="getElementStyles">
            {{ element.content }}
        </h1>

        <text-input
            v-else
            @focusout.native="deselectInput"
            :style="getElementStyles"
            style="background: none"
            size="lg"
            id="heading-input"
        ></text-input>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <!-- <margin></margin>

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

            <width></width>    -->
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMoveElement   from './topbar/DeleteCloneMoveElement'

import TextInput         from './core/TextInput'
import Margin            from './core/Margin'
import Padding           from './core/Padding'
import Border            from './core/Border'
import TextColor         from './core/TextColor'
import TextShadow        from './core/TextShadow'
import TextAlignment     from './core/TextAlignment'
import FontFamily        from './core/FontFamily'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import LineHeight        from './core/LineHeight'
import LetterSpacing     from './core/LetterSpacing'
import Width             from './core/Width'

export default {
    name: "Heading",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMoveElement,
        Margin, Padding, Border, TextInput, FontFamily, TextAlignment, LineHeight, FontWeight,
        FontSize, TextColor, TextShadow, LetterSpacing, Width
    },

    data() {
        return {
            editingText: false,
        }
    },

    methods: {
        selectInput() {
            this.$store.commit('enableKeyBindings', false);
            this.editingText = true;

            this.$nextTick(function () {
                const input = document.getElementById('heading-input');
                const strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },

        deselectInput() {
            this.editingText = false;
            this.$store.commit('enableKeyBindings', true);
        }
    },
}
</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }
</style>
