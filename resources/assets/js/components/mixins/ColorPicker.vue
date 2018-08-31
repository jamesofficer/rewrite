<template>
    <div>
        <b-row>
            <b-col>
                <div class="color-box" @click="toggleColorPicker" :style="
                    { backgroundColor: computedBackgroundColor }
                "></div>
            </b-col>
        </b-row>

        <b-row v-if="showColorPicker">
            <b-col>
                <sketch-color-picker :value="colors" @input="updateValue" class="color-picker"></sketch-color-picker>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'
import { Sketch as SketchColorPicker } from 'vue-color'

export default {
    name: "ColorPicker",

    components: { SidebarControl, SketchColorPicker },

    props: {
        mutation: {
            type: String,
            required: true,
        }
    },

    computed: {
        computedBackgroundColor() {
            return "rgba(" + this.colors.rgba.r + ", " + this.colors.rgba.g + ", " + this.colors.rgba.b + ", " + this.colors.rgba.a + ")";
        }
    },

    data() {
        return {
            showColorPicker: false,

            colors: {
                hex: '#194d33',
                hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
                hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
                rgba: { r: 25, g: 77, b: 51, a: 1 },
                a: 1
            },
        }
    },

    methods: {
        toggleColorPicker() {
            this.showColorPicker = !this.showColorPicker;
        },

        updateValue(color) {
            this.colors = color;
            this.$store.commit(this.mutation, color.hex);
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