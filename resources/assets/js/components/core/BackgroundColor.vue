<template>
    <sidebar-control label="Background Colour">
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
    name: "BackgroundColor",

    components: { SidebarControl, SketchColorPicker },

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
        toggleColorPicker() {
            this.showColorPicker = !this.showColorPicker;
        },

        updateValue(color) {
            this.$store.commit('setBackgroundColor', color.rgba);
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
