<template>
    <div>
        <blockquote
            v-if="! editingText"
            @dblclick="selectInput"
            :style="getElementStyles"
            :class="{ 'selected-element': elementIsSelected }"
            id="text-input"
        >
            {{ element.content }}
        </blockquote>

        <text-input
            v-else
            @focusout.native="editingText = false"
            :style="getElementStyles"
            size="lg"
            id="text-input"
        ></text-input>

        <!-- TOP BAR -->
        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

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
        </sidebar>
    </div>
</template>

<script>
import GetElement      from '../mixins/GetElement'
import EditableText    from '../mixins/EditableText'

import Sidebar          from '../topbar/Topbar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'

import Margin          from '../properties/Margin'
import Padding         from '../properties/Padding'
import Border          from '../properties/Border'
import TextInput       from '../properties/TextInput'
import BackgroundColor from '../properties/BackgroundColor'
import TextAlignment   from '../properties/TextAlignment'
import FontFamily      from '../properties/FontFamily'
import FontWeight      from '../properties/FontWeight'
import FontSize        from '../properties/FontSize'
import TextColor       from '../properties/TextColor'
import TextShadow      from '../properties/TextShadow'
import LineHeight      from '../properties/LineHeight'
import LetterSpacing   from '../properties/LetterSpacing'
import Width           from '../properties/Width'

export default {
    name: "BlockQuote",

    mixins: [GetElement, EditableText],

    components: {
        Sidebar, DeleteCloneMoveElement,
        BackgroundColor, Margin, Padding, Border,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, TextColor, TextShadow, LineHeight, LetterSpacing, Width
    },
}
</script>

