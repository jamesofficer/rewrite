<template>
    <b-container fluid class="shift-container">
        <!-- Session Alert Message -->
        <b-alert :variant="sessionAlert.type" dismissible fade :show="sessionAlert.show" @dismissed="sessionAlert.show = false">
            {{ sessionAlert.message }}
        </b-alert>

        <!-- Overwrite Article Alert -->
        <b-alert show variant="warning" v-if="showArticleOverwriteAlert">
            <h4 class="alert-heading">Article already exists! Overwrite?</h4>
            <p>An article already exists with the title: {{ articleTitle }}</p>
            <p>Do you want to overwrite it?</p>
            <hr>
            <p class="mb-0">
                <b-btn variant="danger" @click="storeArticle(true)">Overwrite</b-btn>
                <b-btn variant="secondary" @click="showArticleOverwriteAlert = false">Cancel</b-btn>
            </p>
        </b-alert>

        <!-- Article Name -->
        <b-row>
            <b-col>
                <em v-if="! settingArticleTitle">
                    <h2 class="shift-article-name" @click="setArticleTitle">{{ articleTitle }}</h2>
                </em>

                <b-input size="lg" v-model="articleTitle"
                    v-else
                    @blur.native="settingArticleTitle = false"
                    ref="articleTitleInput"
                    class="shift-article-name-input"
                ></b-input>
            </b-col>
        </b-row>

        <!-- Top Bar -->
        <b-row class="shift-top-bar">
            <b-col>
                <b-btn variant="success" size="sm" @click="addCanvas">
                    <icon name="palette"></icon> Add Canvas
                </b-btn>

                <portal-target name="top-bar" class="top-bar-portal-target">
                    <!-- Top Bar settings will appear here. -->
                </portal-target>
            </b-col>

            <b-col class="text-right">
                <b-btn v-b-modal.loadArticleModal variant="primary" size="sm">
                    <icon name="folder-open"></icon> Load Article
                </b-btn>

                <b-btn variant="success" size="sm" @click="saveArticle">
                    <icon name="save"></icon> Save Article
                </b-btn>
            </b-col>
        </b-row>

        <!-- Main Workspace -->
        <b-row class="shift-wrapper">
            <b-col col>
                <div class="shift-workspace">
                    <b-container fluid>
                        <component v-for="(canvas, canvasIndex) in canvases"
                            v-bind:is="canvas.type"
                            v-bind:key="canvasIndex"
                            :canvasIndex="canvasIndex"
                            @click.native.stop="selectCanvas(canvasIndex)"
                            class="shift-canvas"
                        ></component>
                    </b-container>
                </div>
            </b-col>

            <!-- Sidebar -->
            <b-col cols="4" v-if="showSidebar">
                <div class="shift-sidebar sticky-top">
                    <portal-target name="sidebar" class="sidebar">
                        <!-- Components Settings will appear in here. -->
                    </portal-target>
                </div>
            </b-col>
        </b-row>

        <!-- Add Component Modal -->
        <add-component-modal></add-component-modal>

        <!-- Load Article Modal -->
        <load-article-modal></load-article-modal>

    </b-container>
</template>

<script>
import Canvas            from "./components/Canvas.vue";
import AddComponentModal from './components/dialogs/AddComponentModal';
import LoadArticleModal  from './components/dialogs/LoadArticleModal';

export default {
    name: "Shift",

    components: {
        Canvas, AddComponentModal, LoadArticleModal
    },

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

        canvases() {
             return this.$store.getters.canvases
         },

        showSidebar() {
            return this.$store.getters.showSidebar
        },
    },

    data() {
        return {
            settingArticleTitle: false,
            showArticleOverwriteAlert: false,

            sessionAlert: {
                show: false,
                message: '',
                type: 'success',
            },
        }
    },

    methods: {
        setArticleTitle() {
            this.settingArticleTitle = true;

            // We can't focus the input until it has rendered on the next tick.
            this.$nextTick(function() {
                this.$refs.articleTitleInput.focus();
            });
        },

        addCanvas() {
            this.$store.commit('addCanvas');
        },

        selectCanvas(canvasIndex) {
            this.$store.commit('selectCanvas', canvasIndex);
        },

        setSessionAlert(message, type) {
            this.sessionAlert = {
                    show: true,
                    message: message,
                    type: type,
                };
        },

        checkArticleExistsWhenSaving (title) {
            return axios.post('/article/check-exists', {
                title: title,
            }).then(response => {
                return response.data;
            })
        },

        saveArticle() {
            const title = this.$store.getters.articleTitle;

            // Don't let users save an article that doesn't have a title.
            if (title === null || title === undefined) {
                window.scrollTo(0, 0);
                this.setSessionAlert('You must give your article a title first.', 'danger');

                return;
            }

            this.checkArticleExistsWhenSaving(title).then((response) => {
                if (response === true) {
                    this.showArticleOverwriteAlert = true;
                } else {
                    this.storeArticle(false);
                }
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
            this.showArticleOverwriteAlert = false;
        },
    },
};
</script>

<style>
.shift-container {
    background: #eee;
    padding: 15px 20px;
}

.shift-article-name {
    padding: 10px;
    margin-bottom: 15px;
    color: #38c172;
}

.shift-article-name-input {
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
}

.shift-article-name:hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px dashed gray;
}

.shift-top-bar {
    padding: 5px;
}

.top-bar-portal-target {
    display: inline;
}

.shift-wrapper {
    margin-top: 10px;
}

.shift-workspace {
    height: fit-content;
    margin-bottom: 50px;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
}

.shift-canvas:hover {
    cursor: pointer;
    border: 3px solid #38c172;
}

.shift-sidebar {
    background: #fff;
    box-shadow: 0 0 20px #ccc;
    padding: 5px 10px;
    top: 20px;
}
</style>
