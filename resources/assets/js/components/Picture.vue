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
                boxShadow: element.boxShadow.offsetX + 'px ' + element.boxShadow.offsetY + 'px ' + element.boxShadow.blurRadius + 'px ' + 'rgba(' + element.boxShadow.color.r + ', ' + element.boxShadow.color.g + ', ' + element.boxShadow.color.b + ', ' + element.boxShadow.color.a + ')',
                borderRadius: element.border.radius + 'px',
            }">
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <image-selector></image-selector>

            <template v-if="element.src">
                <margin></margin>

                <border></border>

                <box-shadow></box-shadow>

                <width></width>

                <image-alignment></image-alignment>
            </template>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import ImageSelector     from './core/ImageSelector'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'
import Width             from './core/Width'
import Border            from './core/Border'
import BoxShadow         from './core/BoxShadow'

export default {
    name: "Picture",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove,
        ImageSelector, ImageAlignment, Margin, Width, Border, BoxShadow,
    },
}
</script>
