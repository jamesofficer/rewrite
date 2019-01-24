<template>
    <div>
        <label class="style-panel-label">Text Colour</label>

        <color-picker :value="textColor" @input="updateValue" class="color-picker"></color-picker>
    </div>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color'
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "TextColor",

    components: { SidebarControl, ColorPicker },

    computed: {
        textColor() {
            return this.$store.getters.getSelectedElement.textColor;
        },
    },

    methods: {
        updateValue(color) {
            this.$store.commit('setComponentProperty', { property: 'textColor', value: color.rgba });
        }
    }
}
</script>