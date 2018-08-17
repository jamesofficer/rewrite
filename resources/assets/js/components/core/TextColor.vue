<template>
    <sidebar-control label="Text Colour">
        <el-color-picker v-model="textColor"></el-color-picker>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "TextColor",

    components: { SidebarControl },

    computed: {
        textColor: {
            get () {
                return this.$store.getters.getCurrentElement.textColor;
            },
            set (color) {
                this.$store.commit('setTextColor', color);
            }
        },
    },
}
</script>
