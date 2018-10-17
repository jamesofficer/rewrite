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
    </b-dropdown>    
</template>

<script>
export default {
    name: "ShiftMenu",

    methods: {
        addCanvas() {
            this.$store.commit('addCanvas');
        },

        setSessionAlert(message, type) {
            this.$parent.sessionAlert = {
                show: true,
                message: message,
                type: type,
            };
        },

        saveArticle() {
            const title = this.$store.getters.articleTitle;

            // Don't let users save an article that doesn't have a title.
            if (title === null || title === undefined) {
                window.scrollTo(0, 0);
                this.$parent.setSessionAlert('You must give your article a title first.', 'danger');

                return;
            }

            this.checkArticleExistsWhenSaving(title).then((response) => {
                if (response === true) {
                    this.$parent.showArticleOverwriteAlert = true;
                } else {
                    this.storeArticle(false);
                }
            });
        },

        checkArticleExistsWhenSaving (title) {
            return axios.post('/article/check-exists', {
                title: title,
            }).then(response => {
                return response.data;
            });
        },

        storeArticle(overwrite) {
            const canvases = this.$store.getters.canvases;
            const title    = this.$store.getters.articleTitle;

            axios.post('/article/store', {
                title: title,
                article_json: canvases,
                overwrite: overwrite,
            })
            .then(response => {
                this.setSessionAlert('Article saved successfully!', 'success');
            })
            .catch(error => {
                this.setSessionAlert('Uh oh! Something went wrong saving your article.', 'danger');
            });

            window.scrollTo(0, 0);
            this.$parent.showArticleOverwriteAlert = false;
        },

        setArticleHtml() {
            this.$store.commit('setArticleHtml', this.$parent.$refs.shiftArticle.$el.innerHTML);
        },

        previewArticleInNewWindow() {
            this.setArticleHtml();

            const newWindow = window.open('', "Title", "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,top="+(800)+",left="+(600));
            const normalize = document.createElement("link");
            const bootstrap = document.createElement("link");

            normalize.setAttribute("href", "https://unpkg.com/normalize.css@8.0.0/normalize.css");
            normalize.setAttribute("rel", "stylesheet");

            bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
            bootstrap.setAttribute("rel", "stylesheet");

            newWindow.document.head.appendChild(normalize);
            newWindow.document.head.appendChild(bootstrap);
            newWindow.document.body.innerHTML = this.$store.getters.articleHtml;
        },

        showExportArticleModal() {
            this.setArticleHtml();
            this.$parent.$refs.exportArticleModal.$children[0].show();
        },
    },
};
</script>

