<template>
    <div :style="getElementStyles">
        <p
            :id="getElementIdentifier"
            :class="{ 'selected-element': elementIsSelected }"
            :style="getElementStyles"
            v-html="element.content"
            @dblclick="showEditTextModal"
        ></p>

        <!-- TOP BAR -->
        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <edit-text-button ref="editTextButton"></edit-text-button>

            <element-positioning></element-positioning>

            <element-borders></element-borders>

            <element-text-formatting></element-text-formatting>

            <element-text-shadow></element-text-shadow>
        </sidebar>
    </div>
</template>

<script>
import EditTextModal     from './dialogs/EditTextModal'

import GetElement        from './mixins/GetElement'

import Sidebar            from './topbar/Topbar'
import DeleteCloneMoveElement   from './topbar/DeleteCloneMoveElement'
import EditTextButton    from './topbar/EditTextButton'

import ElementPositioning    from './panels/ElementPositioning'
import ElementBorders        from './panels/ElementBorders'
import ElementTextFormatting from './panels/ElementTextFormatting'
import ElementTextShadow     from './panels/ElementTextShadow'

import TextInput         from './core/TextInput'

export default {
    name: "Paragraph",

    mixins: [GetElement],

    components: {
        EditTextModal,
        Sidebar, EditTextButton, DeleteCloneMoveElement, TextInput,
        ElementPositioning, ElementBorders, ElementTextFormatting, ElementTextShadow,
    },

    data() {
        return {
            editingText: false,
        }
    },

    methods: {
        selectInput() {
            this.editingText = true;

            this.$nextTick(function () {
                let input = document.getElementById('paragraph-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },

        showEditTextModal() {
            this.$root.$emit('bv::show::modal', 'editTextModal');
        }
    }
}
</script>
