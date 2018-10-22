<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <div v-if="! element.src">
            <icon name="image" scale="5" style="color: gray"></icon>
        </div>

        <div v-else :style="{ textAlign: element.textAlign }">
            <img :src="element.src" :style="getElementStyles">
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <image-selector></image-selector>

            <template v-if="element.src">
                <margin></margin>

                <border></border>

                <box-shadow></box-shadow>

                <image-size></image-size>

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
import ImageSize         from './core/ImageSize'
import Border            from './core/Border'
import BoxShadow         from './core/BoxShadow'

export default {
    name: "Picture",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove,
        ImageSelector, ImageAlignment, Margin, ImageSize, Border, BoxShadow,
    },
}
</script>
