<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div v-if="! element.src">
            <icon name="image" scale="5" style="color: gray"></icon>
        </div>

        <div v-else :style="{ textAlign: element.textAlign }">
            <img :src="element.src" :style="{
                width: element.width + '%',
                margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
                borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
                borderStyle: element.border.style,
                borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
            }">
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <move-component></move-component>



            <image-selector></image-selector>

            <template v-if="element.src">
                <margin></margin>

                <border></border>

                <width></width>

                <image-alignment></image-alignment>
            </template>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'
import MoveComponent     from './mixins/MoveComponent'

import TopBar            from './topbar/TopBar'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import ImageSelector     from './core/ImageSelector'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'
import Width             from './core/Width'
import Border            from './core/Border'

export default {
    name: "Picture",

    mixins: [GetElement, MoveComponent],

    components: {
        TopBar, DeleteComponentButton,
        ImageSelector, ImageAlignment, Margin, Width, Border
    },
}
</script>
