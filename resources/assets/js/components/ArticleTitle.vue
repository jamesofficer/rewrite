<template>
    <b-row class="article-name-container">
        <b-col>
            <h6 class="article-name-label">Article Name</h6>

            <em v-if="! settingArticleTitle">
                <h2 class="shift-article-name" @click="setArticleTitle">{{ articleTitle }}</h2>
            </em>

            <b-input v-else
                size="lg"
                v-model="articleTitle"
                @blur.native="settingArticleTitle = false"
                ref="articleTitleInput"
                class="shift-article-name-input"
            ></b-input>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "ArticleTitle",

    computed: {
        articleTitle: {
            get () {
                const articleTitle = this.$store.getters.articleTitle;

                return articleTitle === null ? "Untitled article..." : articleTitle;
            },
            set (value) {
                this.$store.commit('updateArticleTitle', value);
            }
        },
    },

    data() {
        return {
            settingArticleTitle: false,
        }
    },

    methods: {
        setArticleTitle() {
            this.settingArticleTitle = true;

            // We can't focus the input until it has rendered on the next tick.
            this.$nextTick(function() {
                let input = document.querySelector('.shift-article-name-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },
    }
    
}
</script>

<style scoped>
.article-name-container {
    margin: 20px 0;
}

.article-name-label {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.8em;
    color: #aaa;
}

.shift-article-name {
    padding-bottom: 10px;
    color: #38c172;
    font-family: "Muli", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

.shift-article-name-input[type='text'] {
    margin: 20px 0 30px 0;
    padding: 15px;
    background: none;
    color: #38c172;
    font-family: "Muli", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    font-style: italic;
    line-height: 1.2;
}

.shift-article-name-input[type='text']:focus {
    outline: 0;
}

.shift-article-name:hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px dashed gray;
}
</style>

