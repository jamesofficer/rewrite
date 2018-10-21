<template>
    <div>
        <top-bar-control icon="fill" tooltip="Background Colour" id="background-color-popover"></top-bar-control>

        <b-popover target="background-color-popover" placement="bottom">
            <color-picker :value="backgroundColor" @input="updateValue"></color-picker>
        </b-popover>
    </div>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color'
import TopBarControl from '../topbar/TopBarControl';

export default {
    name: "BackgroundColor",

    components: { TopBarControl, ColorPicker },

    computed: {
        backgroundColor() {
            return this.$store.getters.getCurrentElement.backgroundColor;
        },
    },

    methods: {
        updateValue(color) {
            this.$store.commit('setComponentProperty', { property: 'backgroundColor', value: color.rgba });
        }
    }
}
</script>