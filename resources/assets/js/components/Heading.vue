<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <!-- COMPONENT -->
        <h1 v-if="! editingText" @dblclick="selectInput" :style="{
                textAlign: element.textAlign,
                fontSize: element.fontSize + 'pt',
                fontFamily: element.fontFamily,
                fontWeight: element.fontWeight,
                lineHeight: element.lineHeight,
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
                padding: element.padding.top + 'px ' + element.padding.right + 'px ' + element.padding.bottom + 'px ' + element.padding.left + 'px',
                borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
                borderStyle: element.border.style,
                borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
            }">
                {{ element.content }}
            </h1>

        <text-input v-else @focusout.native="editingText = false" :style="{
                textAlign: element.textAlign,
                fontSize: element.fontSize + 'pt',
                fontFamily: element.fontFamily,
                fontWeight: element.fontWeight,
                lineHeight: element.lineHeight,
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
                padding: element.padding.top + 'px ' + element.padding.right + 'px ' + element.padding.bottom + 'px ' + element.padding.left + 'px',
                borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
                borderStyle: element.border.style,
                borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
            }" size="lg" id="heading-input"
        ></text-input>

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

            <line-height></line-height>

            <text-alignment></text-alignment>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import TextInput         from './core/TextInput'
import Margin            from './core/Margin'
import Padding           from './core/Padding'
import Border            from './core/Border'
import TextColor         from './core/TextColor'
import TextAlignment     from './core/TextAlignment'
import FontFamily        from './core/FontFamily'
import FontWeight        from './core/FontWeight'
import FontSize          from './core/FontSize'
import LineHeight        from './core/LineHeight'

export default {
    name: "Heading",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove,
        TextInput, FontFamily, TextAlignment, LineHeight, FontWeight, FontSize, TextColor, Padding, Margin, Border,
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
                let input = document.getElementById('heading-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },
    }
}
</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }
</style>
