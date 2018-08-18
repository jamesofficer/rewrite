<template>
    <sidebar-control label="Text Colour">
        <b-form-input type="color" v-model="textColor"></b-form-input>
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
