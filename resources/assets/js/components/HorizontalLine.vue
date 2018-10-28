<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ textAlign: element.textAlign }">
        <div :style="getElementStyles"></div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <margin></margin>

            <padding></padding>

            <border></border>

            <background-color></background-color>

            <box-shadow></box-shadow>

            <width></width>
        </top-bar>
    </div>
</template>


<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMoveElement   from './topbar/DeleteCloneMoveElement'

import Margin            from './core/Margin'
import Padding           from './core/Padding'
import Border            from './core/Border'
import BackgroundColor   from './core/BackgroundColor'
import BoxShadow         from './core/BoxShadow'
import Width             from './core/Width'

export default {
    name: "HorizontalLine",

    components: {
        TopBar, DeleteCloneMoveElement,
        Margin, Padding, Border, BackgroundColor, BoxShadow, Width
    },

    mixins: [GetElement],
}
</script>
