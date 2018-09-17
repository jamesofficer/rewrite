<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div v-if="! element.src">
            <icon name="image" scale="5" style="color: gray"></icon>
        </div>

        <div v-else :style="{ textAlign: element.textAlign }">
            <img :src="element.src" :style="{
                width: element.width + '%',
                marginTop: element.margin.top + 'px',
                marginRight: element.margin.right + 'px',
                marginBottom: element.margin.bottom + 'px',
                marginLeft: element.margin.left + 'px',
            }">
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <image-selector></image-selector>

            <template v-if="element.src">
                <margin></margin>

                <width></width>

                <image-alignment></image-alignment>
            </template>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import ImageSelector     from './core/ImageSelector'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'
import Width            from './core/Width'

export default {
    name: "Picture",

    mixins: [GetElement],

    components: {
        TopBar, DeleteComponentButton,
        ImageSelector, ImageAlignment, Margin, Width
    },
}
</script>
