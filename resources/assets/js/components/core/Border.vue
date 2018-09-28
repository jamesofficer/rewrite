<template>
    <div>
        <top-bar-control icon="columns" tooltip="Border" id="border-popover"></top-bar-control>

        <b-popover target="border-popover" placement="bottom">
            <b-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input type="number" v-model="borderTop" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input type="number" v-model="borderRight" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input type="number" v-model="borderBottom" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input type="number" v-model="borderLeft" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Style</label>
                    <b-form-select size="sm" v-model="borderStyle" :options="borderStyles" v-b-tooltip.hover title="Border Style" class="top-bar-control"></b-form-select>
                </b-col>
            </b-row>

            <!--<b-row>
                <label class="sub-label">Colour</label>
                <sketch-color-picker :value="colors" @input="updateValue" class="color-picker"></sketch-color-picker>
            </b-row> !-->
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from '../topbar/TopBarControl';
import { Sketch as SketchColorPicker } from 'vue-color'


export default {
    name: "Border",

    components: { TopBarControl, SketchColorPicker },

    computed: {
        borderTop: {
            get() {
                return this.$store.getters.getCurrentElement.border.top;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'border',
                    subproperty: 'top',
                    value: amount,
                });
            }
        },

        borderRight: {
            get() {
                return this.$store.getters.getCurrentElement.border.right;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'border',
                    subproperty: 'right',
                    value: amount,
                });
            }
        },

        borderBottom: {
            get() {
                return this.$store.getters.getCurrentElement.border.bottom;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'border',
                    subproperty: 'bottom',
                    value: amount,
                });
            }
        },

        borderLeft: {
            get() {
                return this.$store.getters.getCurrentElement.padding.left;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'border',
                    subproperty: 'left',
                    value: amount,
                });
            }
        },
    },

    borderStyle: {
            get () {
                return this.$store.getters.getCurrentElement.borderStyle;
            },
            set (style) {
                this.$store.commit('setComponentProperty', { property: 'borderStyle', value: style });
            }
        },

    data() {
        return {
            borderStyles: [
            {
                text: 'solid',
                value: 'solid',
            },
            {
                text: 'dashed',
                value: 'dashed',
            },
            {
                text: 'dotted',
                value: 'dotted',
            },
            {
                text: 'double',
                value: 'double',
            },
            ]
        }
    },

    /*bgColor() {
            return this.$store.getters.getCurrentElement.borderColor;
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
            this.$store.commit('setComponentProperty', { property: 'borderColor', value: color.rgba });
        }
    }*/
}
</script>