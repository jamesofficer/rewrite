<template>
    <b-modal :id="'loadArticleModal'" title="Load a Saved Article" ref="loadArticleModal" hide-footer>
        <p id="loadingText" v-if="showStatusText">{{ statusText }}</p>

        <template v-if="articles.length > 0" v-for="(article, index) in articles">
            <b-card class="text-center article-card" v-bind:key="index" @click="loadArticle(index)">
                An article you have saved.
            </b-card>
        </template>
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
            this.$store.commit('loadArticle', this.articles[index].article_json);

            this.$refs.loadArticleModal.hide();
        }
    },

    mounted() {
        axios.get('/articles').then(response => {
            this.articles = response.data;
            this.showStatusText = false;
        }).catch(error => {
            this.statusText = "Oops, something went wrong. We could not retrieve your articles.";
        });
    }
}
</script>

<style>
.article-card {
    margin-bottom: 10px;
}

.article-card:hover {
    cursor: pointer;
    border: 3px solid #38c172;
}
</style>


