<template>
    <sidebar-control label="Background Colour">
        <b-form-input type="color" v-model="backgroundColor"></b-form-input>
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
