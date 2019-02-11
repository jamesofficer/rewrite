<template>
    <div>
        <blockquote
            v-if="! editingText"
            @dblclick="selectInput"
            :style="getElementStyles"
            :class="{ 'selected-element': elementIsSelected }"
            id="text-input"
        >
            {{ element.content }}
        </blockquote>

        <text-input
            v-else
            @focusout.native="editingText = false"
            :style="getElementStyles"
            size="lg"
            id="text-input"
        ></text-input>

        <!-- TOP BAR -->
        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <element-positioning></element-positioning>

            <element-borders></element-borders>

            <element-text-formatting></element-text-formatting>

            <element-text-shadow></element-text-shadow>
        </sidebar>
    </div>
</template>

<script>
import GetElement      from '../mixins/GetElement'
import EditableText    from '../mixins/EditableText'

import Sidebar          from '../topbar/Topbar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'

import ElementPositioning    from '../panels/ElementPositioning'
import ElementBorders        from '../panels/ElementBorders'
import ElementTextFormatting from '../panels/ElementTextFormatting'
import ElementTextShadow     from '../panels/ElementTextShadow'

export default {
    name: "BlockQuote",

    mixins: [GetElement, EditableText],

    components: {
        Sidebar, DeleteCloneMoveElement,
        ElementPositioning, ElementBorders, ElementTextFormatting, ElementTextShadow
    },
}
</script>

