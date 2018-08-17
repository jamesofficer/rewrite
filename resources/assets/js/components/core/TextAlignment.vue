<template>
    <sidebar-control label="Text Alignment">
        <el-button-group>
            <el-button size="mini" @click="alignText('left')">Left</el-button>
            <el-button size="mini" @click="alignText('center')">Center</el-button>
            <el-button size="mini" @click="alignText('right')">Right</el-button>
            <el-button size="mini" @click="alignText('justified')">Justified</el-button>
        </el-button-group>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "TextAlignment",

    components: { SidebarControl },

    methods: {
        alignText(position) {
            this.$store.commit('setTextAlignment', position);
        },
    }
}
</script>
