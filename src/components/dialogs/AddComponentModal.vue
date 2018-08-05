<template>
    <div>
        <el-button type="primary" icon="el-icon-edit" circle @click="dialogVisible = true"></el-button>

        <el-dialog title="Add Component" :visible.sync="dialogVisible" width="50%">
            <el-button type="primary" @click="addHeadingComponent()">Heading</el-button>
        </el-dialog>
    </div>
</template>

<script>
import defaultHeading from '../../store/defaults/Heading'
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
        addHeadingComponent() {
            this.dialogVisible = false;
            this.$store.state.canvases[this.index].components.push(
                duplicateObject(defaultHeading)
            );
        }
    },
};
</script>
