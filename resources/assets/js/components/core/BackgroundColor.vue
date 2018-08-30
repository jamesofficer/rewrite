<template>
    <sidebar-control label="Background Colour">
        <div class="row">
            <b-col cols="9">
                <!-- <b-form-input type="color" v-model="backgroundColor"></b-form-input> -->

                <div class="color-box" :style="{ backgroundColor: computedBackgroundColor }"></div>
            </b-col>

            <b-col cols="3">
                <b-btn size="sm" variant="outline-secondary" @click="resetBackgroundColor">Clear</b-btn>
            </b-col>
        </div>

        <sketch :value="colors" @input="updateValue"></sketch>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'
import { Sketch } from 'vue-color'

export default {
    name: "BackgroundColor",

    components: { SidebarControl, Sketch },

    computed: {
        backgroundColor: {
            get () {
                return this.$store.getters.getCurrentElement.backgroundColor;
            },
            set (color) {
                this.$store.commit('setBackgroundColor', color);
            }
        },

        computedBackgroundColor() {
            return "rgba(" + this.colors.rgba.r + ", " + this.colors.rgba.g + ", " + this.colors.rgba.b + ", " + this.colors.rgba.a + ")";
        }
    },

    data () {
        return {
            colors: {
                hex: '#194d33',
                hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
                hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
                rgba: { r: 25, g: 77, b: 51, a: 1 },
                a: 1
            }
        }
    },

    methods: {
        resetBackgroundColor() {
            this.$store.commit('setBackgroundColor', undefined);
        },

        updateValue(color) {
            this.colors = color;
        }
    }
}
</script>

<style>
    .color-box {
        height: 30px;
        width: 100%;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 5px;
    }
</style>

