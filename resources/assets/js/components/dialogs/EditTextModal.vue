<template>
    <b-modal :id="'editTextModal'" title="Edit Paragraph Text" size="lg" ref="editTextModal" hide-footer lazy>
        <trix-vue v-model="content" />
    </b-modal>
</template>

<script>
import TrixVue from '@dymantic/vue-trix-editor'

export default {
    name: "EditTextModal",

    components: { TrixVue },

    computed: {
        content: {
            get () {
                if (this.$store.getters.getSelectedElement !== undefined) {
                    return this.$store.getters.getSelectedElement.content;
                }
            },
            set (text) {
                this.$store.commit('setComponentProperty', { property: 'content', value: text });
            }
        },
    },
}
</script>