<template>
    <div
        :id="getElementIdentifier"
        :class="{ 'selected-element': elementIsSelected }"
        :style="{ textAlign: element.textAlign }"
    >
        <div :style="getElementStyles"></div>

        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <element-positioning></element-positioning>

            <element-background :element="element" :allowImage="false"></element-background>

            <element-borders></element-borders>

            <element-box-shadow></element-box-shadow>
        </top-bar>
    </div>
</template>


<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMoveElement   from './topbar/DeleteCloneMoveElement'

import ElementPositioning    from './panels/ElementPositioning'
import ElementBackground     from './panels/ElementBackground'
import ElementBorders        from './panels/ElementBorders'
import ElementBoxShadow      from './panels/ElementBoxShadow'

export default {
    name: "HorizontalLine",

    components: {
        TopBar, DeleteCloneMoveElement,
        ElementPositioning, ElementBackground, ElementBorders, ElementBoxShadow
    },

    mixins: [GetElement],
}
</script>
