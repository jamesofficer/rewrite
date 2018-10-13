<template>
    <b-modal @shown="copiedToClipboard = false"
            :id="'exportArticleModal'"
            title="Export Article"
            size="lg"
            ref="exportArticleModal"
            hide-footer
            centered
    >

        <b-alert v-if="copiedToClipboard" variant="success" dismissible show>
            Copied to clipboard!
        </b-alert>

        <b-form-textarea type="text" placeholder="Loading..." rows="5" id="article-html-textarea" v-text="articleHtml"></b-form-textarea>

        <hr>

        <b-btn variant="success" block @click="copyHtml">Copy HTML</b-btn>
    </b-modal>
</template>

<script>
export default {
    name: "ExportArticleModal",

    computed: {
        articleHtml() {
            return this.$store.getters.articleHtml;
        }
    },

    data() {
        return {
            copiedToClipboard: false,
        }
    },

    methods: {
        copyHtml() {
            const textarea = document.getElementById('article-html-textarea');

            textarea.focus();
            textarea.select();
            document.execCommand("copy");

            this.copiedToClipboard = true;
        }
    }
}
</script>