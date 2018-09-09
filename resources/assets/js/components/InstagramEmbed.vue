<template>
    <div>
        <!-- COMPONENT -->
        <div class="clickable-component">
            <div :style="{
                    paddingTop: element.padding.top + 'px',
                    paddingRight: element.padding.right + 'px',
                    paddingBottom: element.padding.bottom + 'px',
                    paddingLeft: element.padding.left + 'px',
                }" v-html="element.content">
            </div>
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Instagram">
            <text-input :textarea="true" :inSidebar="true"></text-input>
            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import Sidebar           from './sidebar/Sidebar'
import SidebarControl    from './sidebar/SidebarControl'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import FontWeightAndSize from './core/FontWeightAndSize'
import Padding           from './core/Padding'

export default {
    name: "InstagramEmbed",

    mixins: [GetElement],

    components: {
        TopBar, Sidebar, SidebarControl, DeleteComponentButton,
        TextInput, FontWeightAndSize, Padding,
    },
}
</script>

