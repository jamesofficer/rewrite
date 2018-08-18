<template>
    <div>
        <b-btn v-b-modal.addComponentModal variant="link" size="sm" @click="dialogVisible = true">
            <icon name="plus-circle" scale="2"></icon>
        </b-btn>

        <b-modal id="addComponentModal" title="Add Component to Canvas" v-if="dialogVisible" hide-footer>
            <b-btn type="primary" @click="addComponent('Heading')">Heading</b-btn>
            <b-btn type="primary" @click="addComponent('Paragraph')">Paragraph</b-btn>
        </b-modal>
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
        addComponent(componentType) {
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
