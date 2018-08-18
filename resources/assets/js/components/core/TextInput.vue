<template>
    <sidebar-control label="Text Content">
        <b-form-input v-model="content"></b-form-input>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "TextInput",

    components: { SidebarControl },

    computed: {
        content: {
            get () {
                return this.$store.getters.getCurrentElement.content;
            },
            set (value) {
                this.$store.commit('updateTextContent', value);
            }
        },
    },
}
</script>
