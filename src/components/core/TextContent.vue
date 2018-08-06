<template>
    <sidebar-control :label="'Text Content'">
        <el-input v-model="content"></el-input>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "TextContent",

    components: { SidebarControl },

    computed: {
        content: {
            get () {
                const indexes = this.$store.getters.getCurrentIndexes;
                return this.$store.state.canvases[indexes.canvasIndex].components[indexes.componentIndex].content;
            },
            set (value) {
                this.$store.commit('updateTextContent', value);
            }
        },
    },
}
</script>
