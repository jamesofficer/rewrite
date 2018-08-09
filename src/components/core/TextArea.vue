<template>
    <sidebar-control label="Text Content">
        <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 16}" v-model="content"></el-input>
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

