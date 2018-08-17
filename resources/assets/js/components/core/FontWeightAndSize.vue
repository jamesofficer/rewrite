<template>
    <sidebar-control label="Font Weight and Size">
        <el-select v-model="fontWeight" placeholder="Normal" size="mini" style="margin-right: 5px;">
            <el-option :value="100">Lightest</el-option>
            <el-option :value="300">Light</el-option>
            <el-option :value="500">Normal</el-option>
            <el-option :value="700">Bold</el-option>
            <el-option :value="900">Boldest</el-option>
        </el-select>

        <el-input-number v-model="fontSize" :min="10" :max="64" size="mini" controls-position="right"></el-input-number>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "FontWeightAndSize",

    components: { SidebarControl },

    computed: {
        fontWeight: {
            get () {
                return this.$store.getters.getCurrentElement.fontWeight;
            },
            set (weight) {
                this.$store.commit('setFontWeight', weight);
            }
        },

        fontSize: {
            get () {
                return this.$store.getters.getCurrentElement.fontSize;
            },
            set (size) {
                this.$store.commit('setFontSize', size);
            }
        },
    },

    data() {
        return {
            indexes: this.$store.getters.getCurrentIndexes
        }
    }
}
</script>
