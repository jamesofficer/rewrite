<template>
    <color-picker :value="backgroundColor" @input="updateValue"></color-picker>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color'
import TopBarControl from '../topbar/TopBarControl';

export default {
    name: "BackgroundColor",

    components: { TopBarControl, ColorPicker },

    computed: {
        backgroundColor() {
            return this.$store.getters.getSelectedElement.backgroundColor;
        },
    },

    methods: {
        updateValue(color) {
            this.$store.commit('setComponentProperty', { property: 'backgroundColor', value: color.rgba });
        }
    }
}
</script>