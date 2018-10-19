<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <blockquote v-if="! editingText" @dblclick="selectInput" :style="getElementStyles" id="text-input">
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

            <font-family></font-family>

            <font-size></font-size>

            <font-weight></font-weight>

            <text-alignment></text-alignment>
        </top-bar>
    </div>
</template>

<script>
import GetElement      from './mixins/GetElement'
import EditableText    from './mixins/EditableText'

import TopBar          from './topbar/TopBar'
import DeleteCloneMove from './topbar/DeleteCloneMove'

import TextInput       from './core/TextInput'
import TextAlignment   from './core/TextAlignment'
import FontFamily      from './core/FontFamily'
import FontWeight      from './core/FontWeight'
import FontSize        from './core/FontSize'
import TextColor       from './core/TextColor'
import TextShadow      from './core/TextShadow'
import BackgroundColor from './core/BackgroundColor'
import Padding         from './core/Padding'
import Margin          from './core/Margin'
import Border          from './core/Border'

export default {
    name: "BlockQuote",

    mixins: [GetElement, EditableText],

    components: {
        TopBar, DeleteCloneMove,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, TextColor, TextShadow,
        BackgroundColor, Margin, Padding, Border
    },
}
</script>

