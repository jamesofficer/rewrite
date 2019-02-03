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
            <img :src="element.src" :style="getElementStyles" style="width: inherit">
        </div>

        <!-- TOP BAR -->
        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <image-selector></image-selector>

            <template v-if="element.src !== undefined">
                <element-positioning :showImageAlignment="true"></element-positioning>

                <element-borders></element-borders>

                <element-box-shadow></element-box-shadow>
            </template>
        </sidebar>
    </div>
</template>

<script>
import GetElement         from './mixins/GetElement'

import Sidebar             from './topbar/Topbar'
import DeleteCloneMoveElement from './topbar/DeleteCloneMoveElement'

import ElementPositioning from './panels/ElementPositioning'
import ElementBorders     from './panels/ElementBorders'
import ElementBoxShadow   from './panels/ElementBoxShadow'

import ImageSelector      from './core/ImageSelector'
import ImageAlignment     from './core/ImageAlignment'
import Margin             from './core/Margin'
import Width              from './core/Width'
import Border             from './core/Border'
import BoxShadow          from './core/BoxShadow'

export default {
    name: "Picture",

    mixins: [GetElement],

    components: {
        Sidebar, DeleteCloneMoveElement, ImageSelector,
        ElementPositioning, ElementBorders, ElementBoxShadow,
        ImageAlignment, Margin, Width, Border, BoxShadow,
    },
}
</script>
