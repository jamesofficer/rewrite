<template>
    <b-modal @shown="getSavedArticles" :id="'loadArticleModal'" title="Load a Saved Article" size="lg" ref="loadArticleModal">
        <p id="loadingText" v-if="showStatusText">{{ statusText }}</p>

        <div id="saved-articles-container">
            <div v-if="articles.length > 0" v-for="(article, index) in articles" :key="index" class="article-card-container">
                <b-card class="text-center article-card" v-bind:key="index" @click="selectArticle(index)" :class="{ 'selected-article' : selectedArticle === index }">
                    <icon name="file-alt" scale="2.5"></icon>

                    <h5 class="article-name-text">{{ article.trimmed_article_title }}</h5>

                    <p class="last-updated-text"><small><strong>Last Updated</strong></small></p>
                    <p><small>{{ article.formatted_updated_at }}</small></p>
                </b-card>
            </div>

            <div v-if="articles.length === 0">
                <p>{{ statusText }}</p>
            </div>
        </div>

        <div slot="modal-footer" style="width: 100%">
            <b-btn variant="outline-danger" @click="deleteArticle" :disabled="selectedArticle === undefined">Delete Article</b-btn>
            <b-btn variant="success" style="float: right" @click="loadArticle" :disabled="selectedArticle === undefined">Load Selected Article</b-btn>
        </div>        
    </b-modal>
</template>

<script>
export default {
    name: "LoadArticleModal",

    data() {
        return {
            articles: [],
            selectedArticle: undefined,
            statusText: "Loading your articles...",
            showStatusText: true,
        }
    },

    methods: {
        selectArticle(index) {
            this.selectedArticle = index;
        },

        loadArticle() {
            this.$store.commit('loadArticle', this.articles[this.selectedArticle]);

            this.$store.commit('setNotification', {
                message: 'Article loaded succesfully.',
                type: 'success',
            });

            this.$refs.loadArticleModal.hide();
        },

        deleteArticle() {
            axios.post('/article/destroy', { 'article_id': this.articles[this.selectedArticle].id }).then(response => {
                // refresh the window so it removes the deleted article
                this.getSavedArticles();

                this.$store.commit('setNotification', {
                    message: 'Article deleted succesfully.',
                    type: 'warning',
                });

                this.$refs.loadArticleModal.hide();
            }).catch(error => {
                alert(response.data.message);
            });
        },

        getSavedArticles() {
            axios.get('/articles').then(response => {
                this.articles = response.data;
                this.showStatusText = false;

                if (this.articles.length === 0) {
                    this.statusText = "You have not saved any articles yet.";
                }
            }).catch(error => {
                this.statusText = "Oops, something went wrong. We could not retrieve your articles.";
            });
        }
    },
}
</script>

<style>
.selected-article {
    background: #38c172;
}

.article-card-container {
    display: inline-block;
}

#saved-articles-container {
    height: 430px;
    overflow-y: scroll;
}

.article-card {
    width: 175px;
    height: 200px;
    margin: 0 5px 10px 5px;
}

.article-card:hover {
    cursor: pointer;
    border: 1px solid #38c172;
}

.article-name-text {
    margin-top: 15px;
    margin-bottom: 10px;
}

.last-updated-text {
    margin: 0;
}
</style>


