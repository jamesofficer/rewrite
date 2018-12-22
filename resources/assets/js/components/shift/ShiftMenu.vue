<template>
    <b-dropdown variant="success" size="sm" right>
        <template slot="button-content">
            <icon name="bars"></icon> Menu
        </template>

        <b-dropdown-item @click="addCanvas">
            <icon name="palette"></icon> &nbsp; Add Canvas
        </b-dropdown-item>

        <b-dropdown-divider></b-dropdown-divider>

        <b-dropdown-item v-b-modal.myImagesModal>
            <icon name="images"></icon> &nbsp; My Images
        </b-dropdown-item>

        <b-dropdown-divider></b-dropdown-divider>

        <b-dropdown-item @click="saveArticle">
            <icon name="save"></icon> &nbsp; Save Article
        </b-dropdown-item>

        <b-dropdown-item v-b-modal.loadArticleModal>
            <icon name="folder-open"></icon> &nbsp; Load Article
        </b-dropdown-item>

        <b-dropdown-divider></b-dropdown-divider>

        <b-dropdown-item v-b-modal @click="previewArticleInNewWindow">
            <icon name="eye"></icon> &nbsp; Preview Article
        </b-dropdown-item>

        <b-dropdown-item variant="warning" @click="showExportArticleModal">
            <icon name="file-export"></icon> &nbsp; Export Article
        </b-dropdown-item>

        <b-dropdown-divider></b-dropdown-divider>

        <b-dropdown-item variant="warning" @click="signOut">
            <icon name="sign-out-alt"></icon> &nbsp; Logout
        </b-dropdown-item>
    </b-dropdown>    
</template>

<script>
export default {
    name: "ShiftMenu",

    methods: {
        addCanvas() {
            this.$store.commit('addCanvas');
        },

        saveArticle() {
            const title = this.$store.getters.articleTitle;

            // Don't let users save an article that doesn't have a title.
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
            this.$store.commit('buildHtml', this.$parent.$refs.shiftArticle.innerHTML);
        },

        previewArticleInNewWindow() {
            this.buildHtml();

            const newWindow = window.open('', "Title", "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,top=" + (800) + ",left=" + (600));

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
};
</script>

