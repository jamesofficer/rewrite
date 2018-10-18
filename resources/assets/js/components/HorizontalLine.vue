<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div :style="getElementStyles"></div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <margin></margin>

            <padding></padding>

            <border></border>

            <background-color></background-color>
        </top-bar>
    </div>
</template>


<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import Margin            from './core/Margin'
import Padding           from './core/Padding'
import Border            from './core/Border'
import BackgroundColor   from './core/BackgroundColor'

export default {
    name: "HorizontalLine",

    components: {
        TopBar, DeleteCloneMove,
        Margin, Padding, Border, BackgroundColor,
    },

    mixins: [GetElement],
}
</script>
