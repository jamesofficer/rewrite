<template>
    <sidebar-control label="Background Colour">
        <el-color-picker v-model="backgroundColor"></el-color-picker>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "BackgroundColor",

    components: { SidebarControl },

    computed: {
        backgroundColor: {
            get () {
                return this.$store.getters.getCurrentElement.backgroundColor;
            },
            set (color) {
                this.$store.commit('setBackgroundColor', color);
            }
        },
    },
}
</script>
