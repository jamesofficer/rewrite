<template>
    <div class="clickable-component">
        <blockquote :style="{
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
        }">
            {{ element.content }}
        </blockquote>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="BlockQuote">
            <text-input></text-input>

            <font-family></font-family>

            <text-alignment></text-alignment>

            <font-weight-and-size></font-weight-and-size>

            <text-color></text-color>

            <background-color></background-color>

            <set-border></set-border>

            <padding></padding>

            <margin></margin>
        </sidebar>
    </div>
</template>

<script>
import GetElement     from './mixins/GetElement'

import TopBar         from './topbar/TopBar'
import Sidebar        from './sidebar/Sidebar'
import SidebarControl from './sidebar/SidebarControl'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import TextAlignment     from './core/TextAlignment'
import FontFamily        from './core/FontFamily'
import FontWeightAndSize from './core/FontWeightAndSize'
import TextColor         from './core/TextColor'
import BackgroundColor   from './core/BackgroundColor'
import SetBorder         from './core/SetBorder'
import Padding           from './core/Padding'
import Margin            from './core/Margin'

export default {
    name: "BlockQuote",

    mixins: [GetElement],

    components: {
        Sidebar, SidebarControl, TopBar, DeleteComponentButton,
        TextInput, FontFamily, TextAlignment, FontWeightAndSize, TextColor,
        BackgroundColor, Margin, Padding, SetBorder
    },
}
</script>

<style scoped>
blockquote {
    border-left: 5px solid #ccc;
}
</style>

