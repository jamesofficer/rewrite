<template>
    <sidebar-control :label="'Font Family'">
        <el-select v-model="fontFamily" size="mini" style="display: block">
            <el-option :value="'Times New Roman'">Times New Roman</el-option>
            <el-option :value="'Arial'">Arial</el-option>
            <el-option :value="'Verdana'">Verdana</el-option>
            <el-option :value="'Courier'">Courier</el-option>
            <el-option :value="'Georgia'">Georgia</el-option>
            <el-option :value="'Comic Sans MS'">Comic Sans MS</el-option>
        </el-select>
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
                const indexes = this.$store.getters.getCurrentIndexes;
                return this.$store.state.canvases[indexes.canvasIndex].components[indexes.componentIndex].fontFamily;
            },
            set (fontFamily) {
                this.$store.commit('setFontFamily', fontFamily);
            }
        },
    },
}
</script>
