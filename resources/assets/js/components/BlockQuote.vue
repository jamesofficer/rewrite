<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <blockquote v-if="! editingText" @dblclick="selectInput" :style="{
            textAlign: element.textAlign,
            fontSize: element.fontSize + 'pt',
            fontFamily: element.fontFamily,
            fontWeight: element.fontWeight,
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            backgroundColor: 'rgba(' + element.backgroundColor.r + ', ' + element.backgroundColor.g + ', ' + element.backgroundColor.b + ', ' + element.backgroundColor.a + ')',
            paddingTop: element.padding.top + 'px',
            paddingRight: element.padding.right + 'px',
            paddingBottom: element.padding.bottom + 'px',
            paddingLeft: element.padding.left + 'px',
            marginTop: element.margin.top + 'px',
            marginRight: element.margin.right + 'px',
            marginBottom: element.margin.bottom + 'px',
            marginLeft: element.margin.left + 'px',
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
            marginTop: element.margin.top + 'px',
            marginRight: element.margin.right + 'px',
            marginBottom: element.margin.bottom + 'px',
            marginLeft: element.margin.left + 'px',
        }" size="lg" id="text-input">
        </text-input>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <margin></margin>

            <padding></padding>

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
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import TextAlignment     from './core/TextAlignment'
import FontFamily        from './core/FontFamily'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import TextColor         from './core/TextColor'
import BackgroundColor   from './core/BackgroundColor'
import Padding           from './core/Padding'
import Margin            from './core/Margin'

export default {
    name: "BlockQuote",

    mixins: [GetElement, EditableText],

    components: {
        TopBar, DeleteComponentButton,
        TextInput, FontFamily, TextAlignment, FontWeight, FontSize, TextColor,
        BackgroundColor, Margin, Padding
    },
}
</script>

<style scoped>
blockquote {
    border-left: 5px solid #ccc;
}
</style>

