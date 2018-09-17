<template>
    <b-modal :id="'editTextModal'" title="Edit Paragraph Text" size="lg" ref="editTextModal" hide-footer lazy>
        <trix-vue v-model="content"></trix-vue>
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
                if (this.$store.getters.getCurrentElement) {
                    return this.$store.getters.getCurrentElement.content;
                }

                return '';
            },
            set (value) {
                this.$store.commit('updateTextContent', value);
            }
        },
    },
}
</script>

