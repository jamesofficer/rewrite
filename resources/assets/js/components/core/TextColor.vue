<template>
    <div>
        <h6>Text Color</h6>

        <color-picker :value="textColor" @input="updateValue"></color-picker>
    </div>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color'
import TopBarControl from '../topbar/TopBarControl'

export default {
    name: "TextColor",

    components: { TopBarControl, ColorPicker },

    computed: {
        textColor() {
            return this.$store.getters.getSelectedElement.textColor;
        },
    },

    methods: {
        updateValue(color) {
            this.$store.commit('setComponentProperty', { property: 'textColor', value: color.rgba });
        }
    }
}
</script>