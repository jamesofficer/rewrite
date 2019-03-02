<template>
    <div>
        <label class="style-panel-label">Offsets</label>

        <b-form-row class="mb-2">
            <b-col>
                <label class="sub-label">Offset X</label>
                <b-form-input
                    type="number"
                    class="sidebar-text-input"
                    size="sm"
                    v-model.number="offsetX"
                    @focusout.native="ensureValueIsNotEmpty('offsetX')"
                    :min="0"
                    :max="100"
                ></b-form-input>
            </b-col>

            <b-col>
                <label class="sub-label">Offset Y</label>
                <b-form-input
                    type="number"
                    class="sidebar-text-input"
                    size="sm"
                    v-model.number="offsetY"
                    @focusout.native="ensureValueIsNotEmpty('offsetY')"
                    :min="0"
                    :max="100"
                ></b-form-input>
            </b-col>

            <b-col>
                <label class="sub-label">Blur</label>
                <b-form-input
                    type="number"
                    class="sidebar-text-input"
                    size="sm"
                    v-model.number="blurRadius"
                    @focusout.native="ensureValueIsNotEmpty('blurRadius')"
                    :min="0"
                    :max="100"
                ></b-form-input>
            </b-col>
        </b-form-row>

        <b-form-row>
            <b-col>
                <label class="style-panel-label">Colour</label>
                <color-picker-button propertyName="boxShadow" subPropertyName="color"></color-picker-button>
            </b-col>
        </b-form-row>
    </div>
</template>

<script>
import TopbarButton    from '../topbar/TopbarButton';
import NoEmptyValues     from '../mixins/EnsureNoEmptyValues';
import ColorPickerButton from  './ColorPickerButton';

export default {
    name: "BoxShadow",

    components: { TopbarButton, ColorPickerButton },

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
}
</script>

