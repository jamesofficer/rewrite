<template>
    <div>
        <label class="style-panel-label">Offsets &amp; Blur</label>

        <b-form-row class="mb-2">
            <b-col>
                <label class="sub-label">Offset X</label>
                <b-form-input
                    type="number"
                    v-model.number="offsetX"
                    :min="0"
                    :max="100"
                    @focusout.native="ensureValueIsNotEmpty('offsetX')"
                ></b-form-input>
            </b-col>

            <b-col>
                <label class="sub-label">Offset Y</label>
                <b-form-input
                    type="number"
                    v-model.number="offsetY"
                    :min="0"
                    :max="100"
                    @focusout.native="ensureValueIsNotEmpty('offsetY')"
                ></b-form-input>
            </b-col>

            <b-col>
                <label class="sub-label">Blur</label>
                <b-form-input
                    type="number"
                    v-model.number="blurRadius"
                    :min="0"
                    :max="100"
                    @focusout.native="ensureValueIsNotEmpty('blurRadius')"
                ></b-form-input>
            </b-col>
        </b-form-row>

        <b-form-row>
            <b-col>
                <label class="style-panel-label">Colour</label>
                <color-picker-button propertyName="textShadow" subPropertyName="color"></color-picker-button>
                <!-- <color-picker :value="colors" @input="setColor" class="color-picker"></color-picker> -->
            </b-col>
        </b-form-row>
    </div>
</template>

<script>
import SidebarControl    from '../sidebar/SidebarControl';
import NoEmptyValues     from '../mixins/EnsureNoEmptyValues';
import ColorPickerButton from './ColorPickerButton';

export default {
    name: "TextShadow",

    components: { SidebarControl, ColorPickerButton },

    mixins: [NoEmptyValues],

    computed: {
        offsetX: {
            get() {
                return this.$store.getters.getSelectedElement.textShadow.offsetX;
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
                return this.$store.getters.getSelectedElement.textShadow.offsetY;
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
                return this.$store.getters.getSelectedElement.textShadow.blurRadius;
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
}
</script>

