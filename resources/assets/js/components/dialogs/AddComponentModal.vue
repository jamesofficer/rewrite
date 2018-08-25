<template>
    <div>
        <b-btn v-b-modal="'addComponentModal' + canvasIndex" variant="link" size="sm" class="toggle-modal-btn">
            <icon name="plus-circle" scale="2"></icon>
        </b-btn>

        <b-modal :id="'addComponentModal' + canvasIndex" ref="addComponentModal" title="Add Component to Canvas" hide-footer>
            <b-btn type="primary" @click="addComponent('Heading')">Heading</b-btn>
            <b-btn type="primary" @click="addComponent('Paragraph')">Paragraph</b-btn>
            <b-btn type="primary" @click="addComponent('BlockQuote')">BlockQuote</b-btn>
        </b-modal>
    </div>
</template>

<script>
import defaultHeading from '../../store/defaults/Heading'
import defaultParagraph from '../../store/defaults/Paragraph'
import defaultBlockQuote from '../../store/defaults/BlockQuote'
import { duplicateObject } from '../../store/helpers'

export default {
    name: "AddComponentModal",

    props: {
        canvasIndex: {
            type: Number,
            required: true,
        },
        columnIndex: {
            type: Number,
            required: true,
        }
    },

    data() {
        return {
            dialogVisible: false,
        };
    },

    methods: {
        hideModal () {
            this.$refs.addComponentModal.hide()
        },

        addComponent(componentType) {
            this.dialogVisible = false;

            this.$store.commit('addComponentToColumn', {
                type: componentType,
                indexes: {
                    canvasIndex: this.canvasIndex,
                    columnIndex: this.columnIndex,
                }
            })

            this.hideModal();
        }
    },
};
</script>

<style>
.toggle-modal-btn {
    color: gray;
}

.toggle-modal-btn:hover {
    color: green;
}
</style>
