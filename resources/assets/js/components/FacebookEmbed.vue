<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ textAlign: element.textAlign }">
        <!-- COMPONENT -->
        <div :style="{
                marginTop: element.margin.top + 'px',
                marginRight: element.margin.right + 'px',
                marginBottom: element.margin.bottom + 'px',
                marginLeft: element.margin.left + 'px',
            }" v-html="element.content">
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Facebook">
            <text-input :inSidebar="true"></text-input>

            <image-alignment></image-alignment>

            <margin></margin>
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
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'

export default {
    name: "FacebookEmbed",

    mixins: [GetElement],

    components: {
        TopBar, Sidebar, SidebarControl, DeleteComponentButton,
        TextInput, ImageAlignment, Margin,
    },
}
</script>

