<template>
    <div class="sidebar-control">
        <top-bar-control icon="paint-roller" tooltip="Text Colour" id="text-color-popover"></top-bar-control>

        <b-popover target="text-color-popover" placement="right">
            <color-picker :value="textColor" @input="updateValue"></color-picker>
        </b-popover>
    </div>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color'
import TopBarControl from '../topbar/TopBarControl'

export default {
    name: "TextColor",

    components: { TopBarControl, ColorPicker },

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