<template>
    <div id="app">

        <el-container>
            <!-- Top Bar/Header -->
            <el-header>
                <el-row>
                    <el-col :span="16">
                        <img src="img/shift_logo_white.png" class="header-logo">
                    </el-col>

                    <el-col :span="8">
                        <el-button type="success" plain style="float: right">Save Document</el-button>
                    </el-col>
                </el-row>
            </el-header>

            <el-container>
                <!-- Main Workspace -->
                <el-main>
                    <component v-for="(canvas, index) in canvases"
                        v-bind:is="'Canvas'"
                        v-bind:key="index"
                        :index="index"
                        @click.native="selectCanvas(index)"
                        class="clickable-canvas"
                    ></component>
                </el-main>

                <!-- Sidebar -->
                <el-aside width="400px" v-if="componentIsSelected">
                    <portal-target name="top-bar" class="sidebar">
                        <!-- Components Settings will appear in here. -->
                    </portal-target>
                </el-aside>
            </el-container>

            <!-- Footer -->
            <el-footer>
                <el-button @click="addCanvas">Add Canvas</el-button>
            </el-footer>
        </el-container>

    </div>
</template>

<script>
import Canvas from "./components/Canvas.vue";

export default {
    name: "app",

    components: {
        Canvas
    },

    computed: {
        componentIsSelected() {
            return this.$store.getters.elementIsSelected
        },
    },

    data() {
        return {
            canvases: this.$store.getters.canvases,
        }
    },

    methods: {
        addCanvas() {
            this.$store.commit('addCanvas');
        },

        selectCanvas(index) {
            this.$store.commit('selectCanvas', index);
        },
    },
};
</script>

<style scoped>
    .el-header {
        background: linear-gradient(0deg, rgba(33,150,83,1) -50%, rgba(111,207,151,1) 150%);
        border-bottom: 3px solid rgba(33,150,83,1);
        padding: 10px;
    }

    .el-main {
        padding: 0;
    }

    .el-container {
        background: #ddd;
    }

    .el-aside {
        background: #eee;
    }

    .el-footer {
        background: #ccc;
        padding: 10px;
    }
</style>
