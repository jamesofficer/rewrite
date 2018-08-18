<template>
    <sidebar-control label="Font Family">
        <b-form-select v-model="fontFamily" :options="fonts"></b-form-select>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "FontFamily",

    components: { SidebarControl },

    computed: {
        fontFamily: {
            get () {
                return this.$store.getters.getCurrentElement.fontFamily;
            },
            set (fontFamily) {
                this.$store.commit('setFontFamily', fontFamily);
            }
        },
    },

    data() {
        return {
            fonts: [
                'Times New Roman', 'Helvetica', 'Arial', 'Verdana', 'Courier', 'Georgia', 'Comic Sans MS',
            ],
        }
    }
}
</script>
