<template>
    <sidebar-control label="Text Content">
        <b-form-textarea v-model="content" :rows="5"></b-form-textarea>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "TextArea",

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

