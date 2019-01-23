<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ width: element.width + '%' }">
        <!-- COMPONENT -->
        <h1
            :id="getElementIdentifier"
            :style="getElementStyles"
            v-if="! editingText"
            @dblclick="selectInput"
        >
            {{ element.content }}
        </h1>

        <text-input
            v-else
            @focusout.native="deselectInput"
            :style="getElementStyles"
            style="background: none"
            size="lg"
            id="heading-input"
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
import GetElement        from './mixins/GetElement'

import Sidebar            from './sidebar/Sidebar'
import DeleteCloneMoveElement from './sidebar/DeleteCloneMoveElement'

import ElementPositioning    from './panels/ElementPositioning'
import ElementBorders        from './panels/ElementBorders'
import ElementTextFormatting from './panels/ElementTextFormatting'
import ElementTextShadow     from './panels/ElementTextShadow'

import TextInput         from './core/TextInput'

export default {
    name: "Heading",

    mixins: [GetElement],

    components: {
        Sidebar, DeleteCloneMoveElement, TextInput,
        ElementPositioning, ElementBorders, ElementTextFormatting, ElementTextShadow,
    },

    data() {
        return {
            editingText: false,
        }
    },

    methods: {
        selectInput() {
            this.$store.commit('enableKeyBindings', false);
            this.editingText = true;

            this.$nextTick(function () {
                const input = document.getElementById('heading-input');
                const strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },

        deselectInput() {
            this.editingText = false;
            this.$store.commit('enableKeyBindings', true);
        }
    },
}
</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }
</style>
