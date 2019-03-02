<template>
    <div
        class="form-control color-picker-button"
        @click="showColorPicker(! getShowColorPicker)"
        :style="{ backgroundColor: 'rgba(' + getPropertyColor.r + ', ' + getPropertyColor.g + ', ' + getPropertyColor.b + ', ' + getPropertyColor.a + ')' }"
    ></div>
</template>

<script>
export default {
    name: "ColourPickerButton",

    props: {
        propertyName: {
            type: String,
            required: true,
        },

        subPropertyName: {
            type: String,
            required: false,
        }
    },

    computed: {
        getShowColorPicker() {
            return this.$store.getters['colorpicker/showColorPicker'];
        },

        getPropertyColor() {
            if (this.subPropertyName) {
                return this.$store.getters.getSelectedElement[this.propertyName][this.subPropertyName];
            }

            return this.$store.getters.getSelectedElement[this.propertyName];
        },
    },

    methods: {
        showColorPicker(toggle) {
            this.$store.commit('colorpicker/setColorPickerProperty', this.propertyName);

            if (this.subPropertyName) {
                this.$store.commit('colorpicker/setColorPickerSubProperty', this.subPropertyName);
            }

            this.$store.commit('colorpicker/showColorPicker', toggle);
        }
    },
}
</script>

<style>
.color-picker-button {
    cursor: pointer;
    height: 30px;
}
</style>

