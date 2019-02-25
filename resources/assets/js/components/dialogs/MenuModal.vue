<template>
    <b-modal :id="'menuModal'" size="sm" ref="menuModal" hide-footer hide-header lazy centered>
        <b-list-group class="menu-list-group">
            <b-list-group-item button @click="addCanvas">
                <icon name="palette"></icon> &nbsp; Add Canvas
            </b-list-group-item>

            <b-list-group-item button v-b-modal.myImagesModal>
                <icon name="images"></icon> &nbsp; My Images
            </b-list-group-item>

            <b-list-group-item button @click="saveArticle">
                <icon name="save"></icon> &nbsp; Save Article
            </b-list-group-item>

            <b-list-group-item button v-b-modal.loadArticleModal>
                <icon name="folder-open"></icon> &nbsp; Load Article
            </b-list-group-item>

            <b-list-group-item button v-b-modal @click="previewArticleInNewWindow">
                <icon name="eye"></icon> &nbsp; Preview Article
            </b-list-group-item>

            <b-list-group-item button @click="showExportArticleModal">
                <icon name="file-export"></icon> &nbsp; Export Article
            </b-list-group-item>

            <b-list-group-item button @click="signOut">
                <icon name="sign-out-alt"></icon> &nbsp; Logout
            </b-list-group-item>
        </b-list-group>
    </b-modal>
</template>

<script>
export default {
    name: "MenuModal",

    methods: {
        addCanvas() {
            this.$store.commit('addCanvas');
        },

        saveArticle() {
            const title = this.$store.getters.articleTitle;

            if (title === null || title === undefined || title === 'Untitled article...') {
                this.$store.commit('setNotification', {
                    message: 'You must give your article a title first.',
                    type: 'danger',
                });
            } else {
                this.storeArticle();
            }
        },

        storeArticle() {
            const title     = this.$store.getters.articleTitle;
            const fontsUsed = this.$store.getters.fontsUsed;
            const canvases  = this.$store.getters.canvases;

            axios.post('/article/store', {
                title: title,
                article_json: canvases,
                fonts_used: fontsUsed,
            })
            .then(response => {
                this.$store.commit('setNotification', {
                    message: 'Article saved successfully!',
                    type: 'success',
                });
            })
            .catch(error => {
                this.$store.commit('setNotification', {
                    message: 'Uh oh! Something went wrong saving your article.',
                    type: 'danger',
                });
            });
        },

        buildHtml() {
            this.$store.commit('buildHtml', this.$parent.$refs.rewriteArticle.innerHTML);
        },

        previewArticleInNewWindow() {
            this.buildHtml();

            const newWindow = window.open('', "Title", "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,top=" + (800) + ",left=" + (600));

            newWindow.document.title = 'Article Preview';
            newWindow.document.write(this.$store.getters.articleHtml);
        },

        showExportArticleModal() {
            this.buildHtml();

            this.$parent.$refs.exportArticleModal.$children[0].show();
        },

        signOut() {
            axios.post('/logout').then(response => {
                window.location = location.protocol + '//' + window.location.hostname;
            });
        },
    },
}
</script>

<style scoped>
.menu-list-group > .list-group-item {
    cursor: pointer;
}
</style>
