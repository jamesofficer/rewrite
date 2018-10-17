<template>
    <b-modal @shown="getSavedArticles" :id="'loadArticleModal'" title="Load a Saved Article" size="lg" ref="loadArticleModal" hide-footer>
        <p id="loadingText" v-if="showStatusText">{{ statusText }}</p>

        <div v-if="articles.length > 0" v-for="(article, index) in articles" :key="index" class="article-card-container">
            <b-card class="text-center article-card" v-bind:key="index" @click="loadArticle(index)">
                <icon name="file-alt" scale="2.5"></icon>

                <h5 class="article-name-text">{{ article.trimmed_article_title }}</h5>

                <p class="last-updated-text"><small><strong>Last Updated</strong></small></p>
                <p><small>{{ article.formatted_updated_at }}</small></p>
            </b-card>
        </div>

        <div v-if="articles.length === 0">
            <p>You have not saved any articles yet.</p>
        </div>

    </b-modal>
</template>

<script>
export default {
    name: "LoadArticleModal",

    data() {
        return {
            articles: [],
            statusText: "Loading your articles...",
            showStatusText: true,
        }
    },

    methods: {
        loadArticle(index) {
            this.$store.commit('loadArticle', this.articles[index]);

            this.$refs.loadArticleModal.hide();
        },

        getSavedArticles() {
            axios.get('/articles').then(response => {
                this.articles = response.data;
                this.showStatusText = false;
            }).catch(error => {
                this.statusText = "Oops, something went wrong. We could not retrieve your articles.";
            });
        }
    },
}
</script>

<style>
.article-card-container {
    display: inline-block;
}

.article-card {
    width: 200px;
    height: 200px;
    margin: 0 5px;
}

.article-card:hover {
    cursor: pointer;
    border: 3px solid #38c172;
}

.article-name-text {
    margin-top: 15px;
    margin-bottom: 10px;
}

.last-updated-text {
    margin: 0;
}
</style>


