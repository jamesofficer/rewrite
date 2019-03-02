<template>
    <div>
        <label class="style-panel-label">Widths</label>

        <div class="mb-2">
            <b-form-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input
                        class="sidebar-text-input"
                        size="sm"
                        type="number"
                        v-model.number="borderTop"
                        :min="0"
                        :max="50"
                        @focusout.native="ensureValueIsNotEmpty('borderTop')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input
                        class="sidebar-text-input"
                        size="sm"
                        type="number"
                        v-model.number="borderBottom"
                        :min="0"
                        :max="50"
                        @focusout.native="ensureValueIsNotEmpty('borderBottom')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input
                        class="sidebar-text-input"
                        size="sm"
                        type="number"
                        v-model.number="borderLeft"
                        :min="0"
                        :max="50"
                        @focusout.native="ensureValueIsNotEmpty('borderLeft')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input
                        class="sidebar-text-input"
                        size="sm"
                        type="number"
                        v-model.number="borderRight"
                        :min="0"
                        :max="50"
                        @focusout.native="ensureValueIsNotEmpty('borderRight')"
                    ></b-form-input>
                </b-col>
            </b-form-row>
        </div>

        <b-form-row class="mb-2">
            <b-col>
                <label class="style-panel-label">Radius</label>
                <b-form-input
                    class="sidebar-text-input"
                    size="sm"
                    type="number"
                    v-model.number="borderRadius"
                    :min="0"
                    :max="500"
                ></b-form-input>
            </b-col>

            <b-col>
                <p class="style-panel-label">Style</p>
                <b-form-select
                    class="sidebar-text-input"
                    size="sm"
                    v-model="borderStyle"
                    :options="borderStyles"
                ></b-form-select>
            </b-col>

            <b-col>
                <label class="style-panel-label">Colour</label>
                <color-picker-button
                    class="sidebar-text-input"
                    propertyName="border"
                    subPropertyName="color"
                ></color-picker-button>
            </b-col>
        </b-form-row>
    </div>
</template>

<script>
import NoEmptyValues     from '../mixins/EnsureNoEmptyValues';
import ColorPickerButton from './ColorPickerButton'

export default {
    name: "Border",

    components: { ColorPickerButton },

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
