<template>
    <div>
        <div class="clickable-component">
            <h1 :style="{
                textAlign: textAlignment(this.indexes),
                fontSize: fontSize + 'pt',
                fontWeight: fontWeight,
            }">
                {{ content }}
            </h1>
        </div>

        <div v-if="selected">
            <portal to="top-bar">
                <!-- Heading -->
                <el-row class="sidebar-control">
                    <el-col :span="24">
                        <h1 class="sidebar-heading">{{ this.$options.name }}</h1>
                    </el-col>
                </el-row>
                <!-- Text Content -->
                <el-row class="sidebar-control">
                    <label>Text</label>

                    <el-col :span="24">
                        <el-input v-model="content"></el-input>
                    </el-col>
                </el-row>

                <!-- Font Family -->
                <el-row class="sidebar-control">
                    <label>Font Family</label>

                    <el-col :span="24">
                        <el-select v-model="fontFamily" size="mini" style="display: block" placeholder="Arial">
                            <el-option :value="'Times New Roman'">Times New Roman</el-option>
                            <el-option :value="'Arial'">Arial</el-option>
                            <el-option :value="'Verdana'">Verdana</el-option>
                        </el-select>
                    </el-col>
                </el-row>

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

                <el-row class="sidebar-control">
                    <label>Text Alignment</label>

                    <el-col :span="24">
                        <el-button-group>
                            <el-button size="mini" @click="alignText('left')">Left</el-button>
                            <el-button size="mini" @click="alignText('center')">Center</el-button>
                            <el-button size="mini" @click="alignText('right')">Right</el-button>
                        </el-button-group>
                    </el-col>
                </el-row>
            </portal>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Heading",

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

        selected() {
            return this.$store.state.canvases[this.canvasIndex].components[this.index].selected;
        },

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
