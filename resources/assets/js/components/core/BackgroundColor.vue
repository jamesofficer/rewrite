<template>
    <div>
        <top-bar-control icon="fill" tooltip="Background Colour" id="background-color-popover"></top-bar-control>

        <b-popover target="background-color-popover" placement="bottom">
            <sketch-color-picker :value="colors" @input="updateValue"></sketch-color-picker>
        </b-popover>
    </div>
</template>

<script>
import { Sketch as SketchColorPicker } from 'vue-color'
import TopBarControl from '../topbar/TopBarControl';

export default {
    name: "BackgroundColor",

    components: { TopBarControl, SketchColorPicker },

    computed: {
        bgColor() {
            return this.$store.getters.getCurrentElement.backgroundColor;
        },
    },

    data() {
        return {
            showColorPicker: false,
            colors: { r: 255, g: 255, b: 255, a: 1 },
        }
    },

    methods: {
        updateValue(color) {
            this.$store.commit('setComponentProperty', { property: 'backgroundColor', value: color.rgba });
        }
    }
}
</script>