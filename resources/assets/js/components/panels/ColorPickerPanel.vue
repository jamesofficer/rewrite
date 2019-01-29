<template>
    <div id="color-picker-panel" v-if="showColorPicker">
        <color-picker
            :value="color"
            @input="updateValue"
            class="color-picker"
        ></color-picker>
    </div>
</template>

<script>
import { Sketch as ColorPicker } from 'vue-color'
import FloatingPanel from './FloatingPanel';

export default {
    name: "ColorPickerPanel",

    components: { FloatingPanel, ColorPicker },

    computed: {
        color() {
            if (this.$store.getters['colorpicker/colorPickerSubProperty']) {
                return this.$store.getters.getSelectedElement[this.propertyName][this.subPropertyName];
            }

            return this.$store.getters.getSelectedElement[this.propertyName];
        },

        propertyName() {
            return this.$store.getters['colorpicker/colorPickerProperty'];
        },

        subPropertyName() {
            return this.$store.getters['colorpicker/colorPickerSubProperty'];
        },

        showColorPicker() {
            return this.$store.getters['colorpicker/showColorPicker'];
        }
    },

    methods: {
        updateValue(color) {
            if (this.subPropertyName) {
                this.$store.commit('setComponentSubProperty', {
                    property: this.propertyName,
                    subproperty: this.subPropertyName,
                    value: color.rgba
                });
            } else {
                this.$store.commit('setComponentProperty', { property: this.propertyName, value: color.rgba });
            }
        },
    },
}
</script>

<style>
#color-picker-panel {
    position: fixed;
    left: 440px;
    bottom: 5px;
}
</style>
