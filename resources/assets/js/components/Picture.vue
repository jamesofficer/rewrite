<template>
    <div>
        <div class="text-center" v-if="! element.src">
            <icon name="image" scale="5" style="color: gray"></icon>
        </div>

        <img v-else :src="element.src" :style="{
            maxWidth: element.width,
            paddingTop: element.padding.top + 'px',
            paddingRight: element.padding.right + 'px',
            paddingBottom: element.padding.bottom + 'px',
            paddingLeft: element.padding.left + 'px',
        }">

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Image">
            <image-selector></image-selector>

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

import ImageSelector     from './core/ImageSelector'
import Padding           from './core/Padding'

export default {
    name: "Picture",

    mixins: [GetElement],

    components: {
        TopBar, Sidebar, SidebarControl, DeleteComponentButton,
        ImageSelector, Padding
    },
}
</script>
