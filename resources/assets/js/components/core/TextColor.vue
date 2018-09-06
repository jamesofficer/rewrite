<template>
    <sidebar-control label="Text Colour">
        <b-row>
            <b-col>
                <div class="color-box" @click="toggleColorPicker" :style="{
                     backgroundColor: 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', ' + bgColor.a + ')',
                }"></div>
            </b-col>
        </b-row>

        <b-row v-if="showColorPicker">
            <b-col>
                <sketch-color-picker :value="colors" @input="updateValue" class="color-picker"></sketch-color-picker>
            </b-col>
        </b-row>
    </sidebar-control>
</template>

<script>
import SidebarControl  from '../sidebar/SidebarControl'
import { Sketch as SketchColorPicker } from 'vue-color'

export default {
    name: "TextColor",

    components: { SidebarControl, SketchColorPicker },

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
            this.$store.commit('setTextColor', color.rgba);
        }
    }
}
</script>

<style scoped>
    .color-box {
        height: 30px;
        width: 100%;
        border: 1px solid #ced4da;
        border-radius: 5px;
        padding: 5px;
    }

    .color-box:hover {
        cursor: pointer;
    }

    .color-picker {
        margin-top: 5px;
    }
</style>