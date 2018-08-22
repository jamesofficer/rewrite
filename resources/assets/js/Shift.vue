<template>
    <b-container fluid class="shift-container">
        <!-- Session Alert Message -->
        <b-alert :variant="sessionAlert.type" dismissible fade :show="sessionAlert.show" @dismissed="sessionAlert.show = false">
            {{ sessionAlert.message }}
        </b-alert>

        <!-- Article Name -->
        <b-row>
            <b-col>
                <em v-if="! settingArticleName">
                    <h2 class="shift-article-name" @click="setArticleName">{{ articleName }}</h2>
                </em>

                <b-input size="lg" v-model="articleName"
                    v-else
                    @blur.native="settingArticleName = false"
                    ref="articleNameInput"
                    class="shift-article-name-input"
                ></b-input>
            </b-col>
        </b-row>

        <!-- Top Bar -->
        <b-row class="shift-top-bar">
            <b-col>
                <b-btn variant="outline-success" size="sm" @click="addCanvas">
                    <icon name="plus"></icon> Add Canvas
                </b-btn>

                <b-btn variant="outline-success" size="sm" disabled>
                    <icon name="eye"></icon> Preview Article
                </b-btn>
            </b-col>

            <b-col class="text-right">
                <b-btn v-b-modal.loadArticleModal variant="outline-primary" size="sm">
                    <icon name="folder-open"></icon> Load Article
                </b-btn>

                <b-btn variant="outline-success" size="sm" @click="saveArticle">
                    <icon name="save"></icon> Save Article
                </b-btn>
            </b-col>
        </b-row>

        <!-- Main Workspace -->
        <b-row>
            <b-col class="shift-workspace">
                <component v-for="(canvas, index) in canvases"
                    v-bind:is="canvas.type"
                    v-bind:key="index"
                    :index="index"
                    @click.native="selectCanvas(index)"
                    class="clickable-canvas"
                ></component>
            </b-col>

            <!-- Sidebar -->
            <b-col cols="4" v-if="componentIsSelected" class="shift-sidebar">
                <portal-target name="top-bar" class="sidebar">
                    <!-- Components Settings will appear in here. -->
                </portal-target>
            </b-col>
        </b-row>

        <!-- Load Article Modal -->
        <load-article-modal></load-article-modal>
    </b-container>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import LoadArticleModal from './components/dialogs/LoadArticleModal';

export default {
    name: "Shift",

    components: {
        Canvas, LoadArticleModal
    },

    computed: {
        articleName: {
            get () {
                const articleName = this.$store.getters.articleName;

                return articleName === null ? "Untitled article..." : articleName;
            },
            set (value) {
                this.$store.commit('updateArticleName', value);
            }
        },

        canvases() {
             return this.$store.getters.canvases
         },

        componentIsSelected() {
            return this.$store.getters.elementIsSelected
        },
    },

    data() {
        return {
            settingArticleName: false,

            sessionAlert: {
                show: false,
                message: '',
                type: 'success',
            },
        }
    },

    methods: {
        setArticleName() {
            this.settingArticleName = true;

            // We can't focus the input until it has rendered on the next tick.
            this.$nextTick(function() {
                this.$refs.articleNameInput.focus();
            });
        },

        addCanvas() {
            this.$store.commit('addCanvas');
        },

        selectCanvas(index) {
            this.$store.commit('selectCanvas', index);
        },

        saveArticle() {
            const canvases = this.$store.getters.canvases;

            axios.post('/article/store', {
                article_json: canvases
            })
            .then(response => {
                this.sessionAlert = {
                    show: true,
                    message: 'Article saved successfully!',
                    type: 'success',
                };
            })
            .catch(error => {
                this.sessionAlert = {
                    show: true,
                    message: 'Uh oh! Something went wrong saving your article.',
                    type: 'danger',
                };
            });
        }
    },
};
</script>

<style>
.shift-container {
    background: #eee;
    height: 100vh;
    padding-top: 15px;
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

.shift-workspace {
    height: fit-content;
    margin: 20px;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
}

.shift-sidebar {
    margin: 20px 20px 20px 0;
    background: #fff;
    box-shadow: 0 0 20px #ccc;
}

.add-canvas-icon {
    cursor: pointer;
    color: green;
    margin-bottom: 20px;
}

.add-canvas-icon {
    margin: 20px 0;
    cursor: pointer;
    color: #38c172;
}

.add-canvas-icon:hover {
    color: green;
}
</style>
