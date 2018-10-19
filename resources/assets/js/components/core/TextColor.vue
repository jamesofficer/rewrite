<template>
    <div>
        <top-bar-control icon="paint-roller" tooltip="Text Colour" id="text-color-popover"></top-bar-control>

        <b-popover target="text-color-popover" placement="bottom">
            <color-picker :value="colors" @input="updateValue"></color-picker>
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
        bgColor() {
            return this.$store.getters.getCurrentElement.textColor;
        },
    },

    data() {
        return {
            showColorPicker: false,
            colors: { r: 0, g: 0, b: 0, a: 1 },
        }
    },

    methods: {
        toggleColorPicker() {
            this.showColorPicker = !this.showColorPicker;
        },

        updateValue(color) {
            this.$store.commit('setComponentProperty', { property: 'textColor', value: color.rgba });
        }
    }
}
</script>