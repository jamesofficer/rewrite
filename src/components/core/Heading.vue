<template>
    <div>
        <!-- COMPONENT -->
        <div class="clickable-component">
            <h1 :style="{
                textAlign: textAlignment(this.indexes),
                fontSize: fontSize + 'pt',
                fontWeight: fontWeight,
            }">
                {{ content }}
            </h1>
        </div>

        <!-- SIDEBAR -->
        <sidebar>
            <sidebar-title title="Heading"></sidebar-title>

            <!-- Text Content -->
            <sidebar-control :label="'Text Content'">
                <el-input v-model="content"></el-input>
            </sidebar-control>

            <!-- Font Family -->
            <!--
            <sidebar-control :label="'Font Family'">
                <el-select v-model="fontFamily" size="mini" style="display: block">
                    <el-option :value="'Times New Roman'">Times New Roman</el-option>
                    <el-option :value="'Arial'">Arial</el-option>
                    <el-option :value="'Verdana'">Verdana</el-option>
                </el-select>
            </sidebar-control>
            -->

            <!-- Font Weight and Size -->
            <el-row :gutter="4" class="sidebar-control">
                <label>Text Weight and Size</label>
                <br>

                <el-col :span="12">
                    <el-select v-model="fontWeight" placeholder="Normal" size="mini">
                        <el-option :value="100">Lightest</el-option>
                        <el-option :value="300">Light</el-option>
                        <el-option :value="500">Normal</el-option>
                        <el-option :value="700">Bold</el-option>
                        <el-option :value="900">Boldest</el-option>
                    </el-select>
                </el-col>

                <el-col :span="8">
                    <el-input-number v-model="fontSize" :min="10" :max="64" size="mini" controls-position="right"></el-input-number>
                </el-col>
            </el-row>

            <!-- Text Alignment -->
            <sidebar-control :label="'Text Alignment'">
                <el-button-group>
                    <el-button size="mini" @click="alignText('left')">Left</el-button>
                    <el-button size="mini" @click="alignText('center')">Center</el-button>
                    <el-button size="mini" @click="alignText('right')">Right</el-button>
                </el-button-group>
            </sidebar-control>
        </sidebar>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar        from '../sidebar/Sidebar'
import SidebarTitle   from '../sidebar/SidebarTitle'
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "Heading",

    components: {
        Sidebar, SidebarControl, SidebarTitle
    },

    props: {
        index: {
            type: Number,
        },

        canvasIndex: {
            type: Number
        }
    },

    computed: {
        ...mapGetters({
            textAlignment: 'textAlignment',
        }),

        content: {
            get () {
                return this.$store.state.canvases[this.canvasIndex].components[this.index].content;
            },
            set (value) {
                this.$store.commit('updateTextContent', value);
            }
        },

        fontWeight: {
            get () {
                return this.$store.state.canvases[this.canvasIndex].components[this.index].fontWeight;
            },
            set(weight) {
                this.$store.commit('setFontWeight', weight);
            }
        },

        fontSize: {
            get () {
                return this.$store.state.canvases[this.canvasIndex].components[this.index].fontSize;
            },
            set(size) {
                this.$store.commit('setFontSize', size);
            }
        },
    },

    data() {
        return {
            fontFamily: 'Arial',

            indexes: {
                canvasIndex: this.canvasIndex,
                componentIndex: this.index,
            },
        }
    },

    methods: {
        alignText(position) {
            this.$store.commit('alignText', position);
        },
    },
}

</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }
</style>
