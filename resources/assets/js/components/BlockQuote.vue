<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <blockquote v-if="! editingText" @dblclick="selectInput" :style="{
            textAlign: element.textAlign,
            fontSize: element.fontSize + 'pt',
            fontFamily: element.fontFamily,
            fontWeight: element.fontWeight,
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            backgroundColor: 'rgba(' + element.backgroundColor.r + ', ' + element.backgroundColor.g + ', ' + element.backgroundColor.b + ', ' + element.backgroundColor.a + ')',
            margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
            padding: element.padding.top + 'px ' + element.padding.right + 'px ' + element.padding.bottom + 'px ' + element.padding.left + 'px',
            borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
            borderStyle: element.border.style,
            borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
        }" id="text-input">
            {{ element.content }}
        </blockquote>

        <text-input v-else @focusout.native="editingText = false" :style="{
            textAlign: element.textAlign,
            fontSize: element.fontSize + 'pt',
            fontFamily: element.fontFamily,
            fontWeight: element.fontWeight,
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            backgroundColor: 'rgba(' + element.backgroundColor.r + ', ' + element.backgroundColor.g + ', ' + element.backgroundColor.b + ', ' + element.backgroundColor.a + ')',
            margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
            padding: element.padding.top + 'px ' + element.padding.right + 'px ' + element.padding.bottom + 'px ' + element.padding.left + 'px',
            borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
            borderStyle: element.border.style,
            borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
            borderRadius: element.border.radius + 'px',
        }" size="lg" id="text-input">
        </text-input>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <margin></margin>

            <padding></padding>

            <border></border>

            <text-color></text-color>

            <font-family></font-family>

            <font-size></font-size>

            <font-weight></font-weight>

            <text-alignment></text-alignment>
        </top-bar>
    </div>
</template>

<script>
import GetElement     from './mixins/GetElement'
import EditableText   from './mixins/EditableText'

import TopBar         from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import TextInput         from './core/TextInput'
import TextAlignment     from './core/TextAlignment'
import FontFamily        from './core/FontFamily'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import TextColor         from './core/TextColor'
import BackgroundColor   from './core/BackgroundColor'
import Padding           from './core/Padding'
import Margin            from './core/Margin'
import Border            from './core/Border'

export default {
    name: "BlockQuote",

    mixins: [GetElement, EditableText],

    components: {
        TopBar, DeleteCloneMove,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, TextColor,
        BackgroundColor, Margin, Padding, Border
    },
}
</script>

