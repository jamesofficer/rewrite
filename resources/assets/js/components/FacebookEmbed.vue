<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <!-- COMPONENT -->
        <div :style="{
                marginTop: element.margin.top + 'px',
                marginRight: element.margin.right + 'px',
                marginBottom: element.margin.bottom + 'px',
                marginLeft: element.margin.left + 'px',
            }" v-html="element.content">
        </div>

        <!-- <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcarter.ace.94%2Fposts%2F2191153857786326&width=500" width="500" height="391" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> -->

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Facebook">
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
    name: "FacebookEmbed",

    mixins: [GetElement],

    components: {
        TopBar, Sidebar, SidebarControl, DeleteComponentButton,
        TextInput, FontWeightAndSize, Margin,
    },
}
</script>

