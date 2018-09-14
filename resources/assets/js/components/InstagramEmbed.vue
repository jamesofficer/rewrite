<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <!-- COMPONENT -->
        <iframe :src="element.content + '/embed'" :style="{
            marginTop: element.margin.top + 'px',
            marginRight: element.margin.right + 'px',
            marginBottom: element.margin.bottom + 'px',
            marginLeft: element.margin.left + 'px',
        }"></iframe>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Instagram">
            <text-input :textarea="true" :inSidebar="true"></text-input>

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
import FontWeightAndSize from './core/FontWeightAndSize'
import Margin            from './core/Margin'

export default {
    name: "InstagramEmbed",

    mixins: [GetElement],

    components: {
        TopBar, Sidebar, SidebarControl, DeleteComponentButton,
        TextInput, FontWeightAndSize, Margin,
    },
}
</script>

