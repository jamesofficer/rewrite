<template>
    <div class="sidebar-control">
        <top-bar-control icon="regular/square" tooltip="Borders" id="border-popover"></top-bar-control>

        <b-popover target="border-popover" placement="right">
            <b-row style="width: 225px">
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input
                        type="number"
                        v-model.number="borderTop"
                        :min="0"
                        :max="50"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('borderTop')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input
                        type="number"
                        v-model.number="borderBottom"
                        :min="0"
                        :max="50"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('borderBottom')"
                    ></b-form-input>
                </b-col>
            </b-row>

            <b-row style="width: 225px">
                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input
                        type="number"
                        v-model.number="borderLeft"
                        :min="0"
                        :max="50"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('borderLeft')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input
                        type="number"
                        v-model.number="borderRight"
                        :min="0"
                        :max="50"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('borderRight')"
                    ></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Border Radius</label>
                    <b-form-input type="number" v-model.number="borderRadius" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Style</label>
                    <b-form-select size="sm" v-model="borderStyle" :options="borderStyles"></b-form-select>
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
import TopBarControl from '../topbar/TopBarControl';
import NoEmptyValues from '../mixins/EnsureNoEmptyValues';
import { Chrome as ColorPicker } from 'vue-color'

export default {
    name: "Border",

    components: { TopBarControl, ColorPicker },

    mixins: [NoEmptyValues],

    computed: {
        borderStyle: {
            get() {
                return this.$store.getters.getSelectedElement.border.style;
            },
            set(style) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'border',
                    subproperty: 'style',
                    value: style,
                });
            }
        },

        borderRadius: {
            get() {
                return this.$store.getters.getSelectedElement.border.radius;
            },
            set(radius) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'border',
                    subproperty: 'radius',
                    value: radius,
                });
            }
        },

        borderTop: {
            get() {
                return this.$store.getters.getSelectedElement.border.top;
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
                return this.$store.getters.getSelectedElement.border.right;
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
                return this.$store.getters.getSelectedElement.border.bottom;
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
                return this.$store.getters.getSelectedElement.border.left;
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

    data() {
        return {
            showColorPicker: false,
            colors: { r: 0, g: 0, b: 0, a: 1 },

            borderStyles:
            [
                {
                    text: 'Solid',
                    value: 'solid',
                },
                {
                    text: 'Dashed',
                    value: 'dashed',
                },
                {
                    text: 'Dotted',
                    value: 'dotted',
                },
                {
                    text: 'Double',
                    value: 'double',
                },
            ]
        }
    },

    methods: {
        setColor(color) {
            this.$store.commit('setComponentSubProperty', {
                property: 'border',
                subproperty: 'color',
                value: color.rgba,
            });
        },
    }
}
</script>

<style>

</style>
