<template>
    <div>
        <blockquote v-if="! editingText" @dblclick="selectInput" :style="getElementStyles" :class="{ 'selected-element': elementIsSelected }" id="text-input" >
            {{ element.content }}
        </blockquote>

        <text-input v-else @focusout.native="editingText = false" :style="getElementStyles" size="lg" id="text-input"></text-input>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

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
import GetElement      from './mixins/GetElement'
import EditableText    from './mixins/EditableText'

import TopBar          from './topbar/TopBar'
import DeleteCloneMove from './topbar/DeleteCloneMove'

import Margin          from './core/Margin'
import Padding         from './core/Padding'
import Border          from './core/Border'
import TextInput       from './core/TextInput'
import BackgroundColor from './core/BackgroundColor'
import TextAlignment   from './core/TextAlignment'
import FontFamily      from './core/FontFamily'
import FontWeight      from './core/FontWeight'
import FontSize        from './core/FontSize'
import TextColor       from './core/TextColor'
import TextShadow      from './core/TextShadow'
import LineHeight      from './core/LineHeight'
import LetterSpacing   from './core/LetterSpacing'
import Width           from './core/Width'

export default {
    name: "BlockQuote",

    mixins: [GetElement, EditableText],

    components: {
        TopBar, DeleteCloneMove,
        BackgroundColor, Margin, Padding, Border,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, TextColor, TextShadow, LineHeight, LetterSpacing, Width
    },
}
</script>

