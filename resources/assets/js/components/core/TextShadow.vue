<template>
    <div>
        <top-bar-control icon="sun" tooltip="Text Shadow" id="text-shadow-popover"></top-bar-control>

        <b-popover target="text-shadow-popover" placement="bottom">
            <b-row>
                <b-col>
                    <label class="sub-label">Offset X</label>
                    <b-form-input size="sm" type="number" v-model.number="offsetX" :min="0" :max="100"></b-form-input>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col>
                    <label class="sub-label">Offset Y</label>
                    <b-form-input size="sm" type="number" v-model.number="offsetY" :min="0" :max="100"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Blur Radius</label>
                    <b-form-input size="sm" type="number" v-model.number="blurRadius" :min="0" :max="100"></b-form-input>                    
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Colour</label>
                    <color-picker :value="colors" @input="setColor"></color-picker>
                </b-col>
            </b-row>
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from "../topbar/TopBarControl";
import { Chrome as ColorPicker } from 'vue-color'

export default {
    name: "TextShadow",

    components: { TopBarControl, ColorPicker },

    computed: {
        offsetX: {
            get() {
                return this.$store.getters.getCurrentElement.textShadow.offsetX;
            },
            set(offset) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'textShadow',
                    subproperty: 'offsetX',
                    value: offset,
                });
            }
        },

        offsetY: {
            get() {
                return this.$store.getters.getCurrentElement.textShadow.offsetY;
            },
            set(offset) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'textShadow',
                    subproperty: 'offsetY',
                    value: offset,
                });
            }
        },

        blurRadius: {
            get() {
                return this.$store.getters.getCurrentElement.textShadow.blurRadius;
            },
            set(radius) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'textShadow',
                    subproperty: 'blurRadius',
                    value: radius,
                });
            }
        },
    },

    data() {
        return {
            showColorPicker: false,
            colors: { r: 0, g: 0, b: 0, a: 1 },
        }
    },

    methods: {
        setColor(color) {
            this.$store.commit('setComponentSubProperty', {
                property: 'textShadow',
                subproperty: 'color',
                value: color.rgba,
            });
        },
    }

}
</script>

