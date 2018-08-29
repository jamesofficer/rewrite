<template>
    <b-modal id="addComponentModal" title="Add Component to Canvas" hide-footer v-model="showModal">
        <b-btn type="primary" @click="addComponent('Heading')">Heading</b-btn>
        <b-btn type="primary" @click="addComponent('Paragraph')">Paragraph</b-btn>
        <b-btn type="primary" @click="addComponent('BlockQuote')">BlockQuote</b-btn>
    </b-modal>
</template>

<script>
import { duplicateObject } from '../../store/helpers'
import defaultHeading      from '../../store/defaults/Heading'
import defaultParagraph    from '../../store/defaults/Paragraph'
import defaultBlockQuote   from '../../store/defaults/BlockQuote'

export default {
    name: "AddComponentModal",

    computed: {
        showModal: {
            get() {
                return this.$store.getters.showAddComponentModal;
            },

            set(toggle) {
                this.$store.commit('toggleAddComponentModal', toggle);
            }
        }
    },

    methods: {
        addComponent(componentType) {
            this.$store.commit('toggleAddComponentModal', false);
            this.$store.commit('addComponentToColumn', componentType);
        }
    },
};
</script>
