<template>
    <div>
        <b-row>
            <b-col>
                <label class="sub-label">Offset X</label>
                <b-form-input
                    size="sm"
                    type="number"
                    v-model.number="offsetX"
                    @focusout.native="ensureValueIsNotEmpty('offsetX')"
                    :min="0"
                    :max="100"
                ></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <label class="sub-label">Offset Y</label>
                <b-form-input
                    size="sm"
                    type="number"
                    v-model.number="offsetY"
                    @focusout.native="ensureValueIsNotEmpty('offsetY')"
                    :min="0"
                    :max="100"
                ></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <label class="sub-label">Blur Radius</label>
                <b-form-input
                    size="sm"
                    type="number"
                    v-model.number="blurRadius"
                    @focusout.native="ensureValueIsNotEmpty('blurRadius')"
                    :min="0"
                    :max="100"
                ></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <label class="sub-label">Colour</label>
                <color-picker :value="colors" @input="setColor"></color-picker>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import TopBarControl from "../topbar/TopBarControl";
import NoEmptyValues from '../mixins/EnsureNoEmptyValues';
import { Chrome as ColorPicker } from 'vue-color'

export default {
    name: "BoxShadow",

    components: { TopBarControl, ColorPicker },

    mixins: [NoEmptyValues],

    computed: {
        offsetX: {
            get() {
                return this.$store.getters.getSelectedElement.boxShadow.offsetX;
            },
            set(offset) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'boxShadow',
                    subproperty: 'offsetX',
                    value: offset,
                });
            }
        },

        offsetY: {
            get() {
                return this.$store.getters.getSelectedElement.boxShadow.offsetY;
            },
            set(offset) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'boxShadow',
                    subproperty: 'offsetY',
                    value: offset,
                });
            }
        },

        blurRadius: {
            get() {
                return this.$store.getters.getSelectedElement.boxShadow.blurRadius;
            },
            set(radius) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'boxShadow',
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
                property: 'boxShadow',
                subproperty: 'color',
                value: color.rgba,
            });
        },
    }

}
</script>

