<template>
    <div :class="{ 'selected-element': elementIsSelected }">
        <!-- If there is no image, show the missing image icon. -->
        <div v-if="! element.src">
            <icon name="image" scale="5" style="color: gray"></icon>
        </div>

        <!-- Otherwise, show the image. -->
        <div
            v-else
            :id="getElementIdentifier"
            :style="{ textAlign: element.textAlign }"
        >
            <img :src="element.src" :style="getElementStyles">
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

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
import GetElement      from './mixins/GetElement'

import TopBar          from './topbar/TopBar'
import DeleteCloneMoveElement from './topbar/DeleteCloneMoveElement'

import ImageSelector   from './core/ImageSelector'
import ImageAlignment  from './core/ImageAlignment'
import Margin          from './core/Margin'
import Width           from './core/Width'
import Border          from './core/Border'
import BoxShadow       from './core/BoxShadow'

export default {
    name: "Picture",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMoveElement,
        ImageSelector, ImageAlignment, Margin, Width, Border, BoxShadow,
    },
}
</script>
