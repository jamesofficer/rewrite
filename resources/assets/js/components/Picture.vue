<template>
    <div>
        <div v-if="! element.src">
            <icon name="image" scale="5" style="color: gray"></icon>
        </div>

        <div v-else :style="{ textAlign: element.textAlign }">
            <img :src="element.src" :style="{
                maxWidth: element.width,
                marginTop: element.margin.top + 'px',
                marginRight: element.margin.right + 'px',
                marginBottom: element.margin.bottom + 'px',
                marginLeft: element.margin.left + 'px',
            }">
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Image">
            <image-selector></image-selector>

            <template v-if="element.src">
                <text-alignment></text-alignment>

                <margin></margin>
            </template>
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
import TextAlignment     from './core/TextAlignment'
import Margin            from './core/Margin'

export default {
    name: "Picture",

    mixins: [GetElement],

    components: {
        TopBar, Sidebar, SidebarControl, DeleteComponentButton,
        ImageSelector, TextAlignment, Margin,
    },
}
</script>
