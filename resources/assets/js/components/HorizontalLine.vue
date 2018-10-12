<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div :style="{
            margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
            padding: element.padding.top + 'px ' + element.padding.right + 'px ' + element.padding.bottom + 'px ' + element.padding.left + 'px',
            background: 'rgba(' + element.backgroundColor.r + ', ' + element.backgroundColor.g + ', ' + element.backgroundColor.b + ')',
            borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
            borderStyle: element.border.style,
            borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
        }"></div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <move-component-up></move-component-up>

            <move-component-down></move-component-down>

            <margin></margin>

            <padding></padding>

            <border></border>

            <background-color></background-color>
        </top-bar>
    </div>
</template>


<script>
import GetElement        from './mixins/GetElement'
import MoveComponent     from './mixins/MoveComponent'

import TopBar            from './topbar/TopBar'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import Margin            from './core/Margin'
import Padding           from './core/Padding'
import Border            from './core/Border'
import BackgroundColor   from './core/BackgroundColor'

export default {
    name: "HorizontalLine",

    components: {
        TopBar, DeleteComponentButton,
        Margin, Padding, Border, BackgroundColor,
    },

    mixins: [GetElement, MoveComponent],
}
</script>
