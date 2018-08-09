<template>
    <div>
        <el-button type="primary" icon="el-icon-edit" circle @click="dialogVisible = true"></el-button>

        <el-dialog title="Add Component" :visible.sync="dialogVisible" width="50%" center>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addHeadingComponent('Heading')">Heading</el-button>
                <el-button type="primary" @click="addHeadingComponent('Paragraph')">Paragraph</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import defaultHeading from '../../store/defaults/Heading'
import deafultParagraph from '../../store/defaults/Paragraph'
import { duplicateObject } from '../../store/helpers'

export default {
    name: "AddComponentModal",

    props: {
        canvasIndex: {
            type: Number,
        }
    },

    data() {
        return {
            index: this.canvasIndex,
            dialogVisible: false,
        };
    },

    methods: {
        addHeadingComponent(componentType) {
            this.dialogVisible = false;

            if (componentType === 'Heading') {
                this.$store.state.canvases[this.index].components.push(
                    duplicateObject(defaultHeading)
                );
            }

            if (componentType === 'Paragraph') {
                this.$store.state.canvases[this.index].components.push(
                    duplicateObject(deafultParagraph)
                );
            }
            
        }
    },
};
</script>

<style>
    .el-dialog {
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }
</style>
